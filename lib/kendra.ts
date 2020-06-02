import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service kendra
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkendra.html
 */
export class Kendra extends PolicyStatement {
    public servicePrefix = 'kendra';
    public actions : Actions = { "BatchDeleteDocument": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html", "description": "Batch Delete document", "accessLevel": "Write", "resourceTypes": { "index": { "required": true } } }, "BatchPutDocument": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html", "description": "Batch put document", "accessLevel": "Write", "resourceTypes": { "index": { "required": true } } }, "CreateDataSource": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html", "description": "Create a data source", "accessLevel": "Write", "resourceTypes": { "index": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateFaq": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html", "description": "Create an Faq", "accessLevel": "Write", "resourceTypes": { "index": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateIndex": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html", "description": "Create an Index", "accessLevel": "Write", "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DeleteDataSource": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html", "description": "Delete a data source", "accessLevel": "Write", "resourceTypes": { "data-source": { "required": true }, "index": { "required": true } } }, "DeleteFaq": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html", "description": "Delete an Faq", "accessLevel": "Write", "resourceTypes": { "faq": { "required": true }, "index": { "required": true } } }, "DeleteIndex": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html", "description": "Delete an Index", "accessLevel": "Write", "resourceTypes": { "index": { "required": true } } }, "DescribeDataSource": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html", "description": "Describe a data source", "accessLevel": "Read", "resourceTypes": { "data-source": { "required": true }, "index": { "required": true } } }, "DescribeFaq": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html", "description": "Describe an Faq", "accessLevel": "Read", "resourceTypes": { "faq": { "required": true }, "index": { "required": true } } }, "DescribeIndex": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html", "description": "Describe an Index", "accessLevel": "Read", "resourceTypes": { "index": { "required": true } } }, "ListDataSourceSyncJobs": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html", "description": "Get Data Source sync job history", "accessLevel": "List", "resourceTypes": { "data-source": { "required": true }, "index": { "required": true } } }, "ListDataSources": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html", "description": "List the data sources", "accessLevel": "List", "resourceTypes": { "index": { "required": true } } }, "ListFaqs": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html", "description": "List the Faqs", "accessLevel": "List", "resourceTypes": { "index": { "required": true } } }, "ListIndices": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html", "description": "List the indexes", "accessLevel": "List" }, "ListTagsForResource": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html", "description": "Lists tags for a resource", "accessLevel": "List", "resourceTypes": { "data-source": { "required": false }, "faq": { "required": false }, "index": { "required": false } } }, "Query": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html", "description": "Query documents and Faqs", "accessLevel": "Read", "resourceTypes": { "index": { "required": true } } }, "StartDataSourceSyncJob": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html", "description": "Start Data Source sync job", "accessLevel": "Write", "resourceTypes": { "data-source": { "required": true }, "index": { "required": true } } }, "StopDataSourceSyncJob": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html", "description": "Stop Data Source sync job", "accessLevel": "Write", "resourceTypes": { "data-source": { "required": true }, "index": { "required": true } } }, "SubmitFeedback": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html", "description": "Send feedback about a query results", "accessLevel": "Write", "resourceTypes": { "index": { "required": true } } }, "TagResource": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html", "description": "Tags a resource with given key value pairs", "accessLevel": "Tagging", "resourceTypes": { "data-source": { "required": false }, "faq": { "required": false }, "index": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UntagResource": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html", "description": "Removes the tag with the given key from a resource", "accessLevel": "Tagging", "resourceTypes": { "data-source": { "required": false }, "faq": { "required": false }, "index": { "required": false } }, "conditions": ["aws:TagKeys"] }, "UpdateDataSource": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html", "description": "Update a data source", "accessLevel": "Write", "resourceTypes": { "data-source": { "required": true }, "index": { "required": true } } }, "UpdateIndex": { "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html", "description": "Update an Index", "accessLevel": "Write", "resourceTypes": { "index": { "required": true } } } };

    /**
     * Batch Delete document
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html
     */
    public batchDeleteDocument () {
        this.add('kendra:BatchDeleteDocument');
        return this;
    }

    /**
     * Batch put document
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html
     */
    public batchPutDocument () {
        this.add('kendra:BatchPutDocument');
        return this;
    }

    /**
     * Create a data source
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html
     */
    public createDataSource () {
        this.add('kendra:CreateDataSource');
        return this;
    }

    /**
     * Create an Faq
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html
     */
    public createFaq () {
        this.add('kendra:CreateFaq');
        return this;
    }

    /**
     * Create an Index
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html
     */
    public createIndex () {
        this.add('kendra:CreateIndex');
        return this;
    }

    /**
     * Delete a data source
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html
     */
    public deleteDataSource () {
        this.add('kendra:DeleteDataSource');
        return this;
    }

    /**
     * Delete an Faq
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html
     */
    public deleteFaq () {
        this.add('kendra:DeleteFaq');
        return this;
    }

    /**
     * Delete an Index
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html
     */
    public deleteIndex () {
        this.add('kendra:DeleteIndex');
        return this;
    }

    /**
     * Describe a data source
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html
     */
    public describeDataSource () {
        this.add('kendra:DescribeDataSource');
        return this;
    }

    /**
     * Describe an Faq
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html
     */
    public describeFaq () {
        this.add('kendra:DescribeFaq');
        return this;
    }

    /**
     * Describe an Index
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html
     */
    public describeIndex () {
        this.add('kendra:DescribeIndex');
        return this;
    }

    /**
     * Get Data Source sync job history
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html
     */
    public listDataSourceSyncJobs () {
        this.add('kendra:ListDataSourceSyncJobs');
        return this;
    }

    /**
     * List the data sources
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html
     */
    public listDataSources () {
        this.add('kendra:ListDataSources');
        return this;
    }

    /**
     * List the Faqs
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html
     */
    public listFaqs () {
        this.add('kendra:ListFaqs');
        return this;
    }

    /**
     * List the indexes
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html
     */
    public listIndices () {
        this.add('kendra:ListIndices');
        return this;
    }

    /**
     * Lists tags for a resource
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('kendra:ListTagsForResource');
        return this;
    }

    /**
     * Query documents and Faqs
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html
     */
    public query () {
        this.add('kendra:Query');
        return this;
    }

    /**
     * Start Data Source sync job
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html
     */
    public startDataSourceSyncJob () {
        this.add('kendra:StartDataSourceSyncJob');
        return this;
    }

    /**
     * Stop Data Source sync job
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html
     */
    public stopDataSourceSyncJob () {
        this.add('kendra:StopDataSourceSyncJob');
        return this;
    }

    /**
     * Send feedback about a query results
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html
     */
    public submitFeedback () {
        this.add('kendra:SubmitFeedback');
        return this;
    }

    /**
     * Tags a resource with given key value pairs
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html
     */
    public tagResource () {
        this.add('kendra:TagResource');
        return this;
    }

    /**
     * Removes the tag with the given key from a resource
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html
     */
    public untagResource () {
        this.add('kendra:UntagResource');
        return this;
    }

    /**
     * Update a data source
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html
     */
    public updateDataSource () {
        this.add('kendra:UpdateDataSource');
        return this;
    }

    /**
     * Update an Index
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
     */
    public updateIndex () {
        this.add('kendra:UpdateIndex');
        return this;
    }
}
