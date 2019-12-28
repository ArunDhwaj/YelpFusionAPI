
1.0) Developer
==============
Author: Arun Dhwaj
Date: 28th Dec'2019

2.0) Requirements
==================

2.1) Reference/ Source for API:
    https://www.yelp.com/developers/documentation/v3/business_search
    Note: Requirement doc has been provided separately, due to privacy.

2.2)In order to get top five results, the following API used:

    i) https://api.yelp.com/v3/businesses/search
    Optional Options: sort_by: 'rating'

    ii) https://api.yelp.com/v3/businesses/{id}/reviews

    iii) For sending the network request: NPM PACKAGE 'yelp-fusion'has been used by using the Async /Await construct.

2.2) Note: Optional. Suggestion to the search algorithm that the results be sorted by one of the these modes: best_match, rating, review_count or distance.
    The default is best_match. Note that specifying the sort_by is a suggestion (not strictly enforced) to Yelp's search, which considers multiple
    input parameters to return the most relevant results. For example, the rating sort is not strictly sorted by the rating value, but by an adjusted
    rating value that takes into account the number of ratings, similar to a Bayesian average. This is to prevent skewing results to businesses with
    a single review.


2.3) Result: The top 5 results are stored in: 'Top5_icecream_shops.txt';

2.4) Ignore: Please ignore the file: Top5_icecream_shops_ignore.txt: This is tested for top 11 records, sort_by: 'rating'.


3.0) Development Environment
=============================

3.1) i) Operating System: Mac OS: 10.11.6
     ii) Tech-Stacks: Node v12.14.0, JavaScript, Async/ Await construct
     iii) IDE: IntelliJ Community 2019.2


----------************ THE END ******** -----------------------------


