/*
Author: Arun Dhwaj
Date: 28th Dec''019
Purpose: Finding top five icecream shops, along with their corresponding reviews, using yelp fusion API
*/

'use strict';

const yelp = require('yelp-fusion');
const apiKey ='Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx';

const client = yelp.client(apiKey);
let top5Shops = [];

async function yelp_fusion() 
{
    const searchRequest = {
        term: 'ice cream shop',
        location: 'Alpharetta, GA',
        sort_by: 'rating'
    };
    
    await client.search(searchRequest).then(async response => 
    {

        const businessesResult = response.jsonBody.businesses;
        
        for (let i = 0; i < businessesResult.length; i++)
        {
            let obj = {
                "Business name": businessesResult[i].name,
                "street address1": businessesResult[i].location.address1,
                "street address2": businessesResult[i].location.address2,
                "street address3": businessesResult[i].location.address3,
                "city": businessesResult[i].location.city,
                "Business rating": businessesResult[i].rating
            };
            
            await client.reviews(`${businessesResult[i].alias}`).then(async response =>
            {
                let temp_review = [];
                
                for (let j = 0; j < response.jsonBody.reviews.length; j++) 
                {
                    temp_review.push({ "Review text": response.jsonBody.reviews[j].text, "Reviewer name": response.jsonBody.reviews[j].user.name });
                }
                
                obj.reviews = temp_review
            }).catch(error => 
            {
                console.log(error);
            });
            
            top5Shops.push(obj);
            if (i == 4)
            {
                break;
            }
        }
        
        const prettyJson = JSON.stringify(top5Shops, " ", 4);
        console.log(prettyJson);
    }).catch(error => 
    {
        console.log(error);
    });
}

yelp_fusion();
