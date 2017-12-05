/**
 * Created by Arthur on 2017/2/6.
 */
const elasticsearch = require('elasticsearch');
const configs = require('../../config.default');
const client = new elasticsearch.Client({
    host: configs.elastic.url,
    log: 'info'
});

//client.ping({
//    requestTimeout: 30000,
//}, function (error) {
//    if (error) {
//        console.error('elasticsearch cluster is down!');
//    } else {
//        console.log('All is well');
//    }
//});

var searchParams = {
    index: 'yun',
    from: 0,
    size: 6,
    body: {
        "query": {
            "bool": {
                "must": [
                    {
                        "range": {
                            "category": {
                                "from": 0,
                                "to": 6
                            }
                        }
                    },
                    {
                        "term": {
                            "title": "a"
                        }
                    }
                ]
            }
        },
        "sort": [
            {
                "feed_time": {
                    "order": "desc"
                }
            }
        ]
    }
};

client.search(searchParams, function (err, res) {
    if (err) {
        throw err;
    }
    console.log(res.hits.hits);
});