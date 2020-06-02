import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service firehose
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisfirehose.html
 */
export class Firehose extends PolicyStatement {
    public servicePrefix = 'firehose';
    public actions : Actions = { "CreateDeliveryStream": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html", "description": "Creates a delivery stream.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DeleteDeliveryStream": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html", "description": "Deletes a delivery stream and its data.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } } }, "DescribeDeliveryStream": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html", "description": "Describes the specified delivery stream and gets the status.", "accessLevel": "List", "resourceTypes": { "deliverystream": { "required": true } } }, "ListDeliveryStreams": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html", "description": "Lists your delivery streams.", "accessLevel": "List" }, "ListTagsForDeliveryStream": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html", "description": "Lists the tags for the specified delivery stream.", "accessLevel": "List", "resourceTypes": { "deliverystream": { "required": true } } }, "PutRecord": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html", "description": "Writes a single data record into an Amazon Kinesis Firehose delivery stream.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } } }, "PutRecordBatch": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html", "description": "Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } } }, "StartDeliveryStreamEncryption": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html", "description": "Enables server-side encryption (SSE) for the delivery stream.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } } }, "StopDeliveryStreamEncryption": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html", "description": "Disables the specified destination of the specified delivery stream.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } } }, "TagDeliveryStream": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_TagDeliveryStream.html", "description": "Adds or updates tags for the specified delivery stream.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UntagDeliveryStream": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_UntagDeliveryStream.html", "description": "Removes tags from the specified delivery stream.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } }, "conditions": ["aws:TagKeys"] }, "UpdateDestination": { "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html", "description": "Updates the specified destination of the specified delivery stream.", "accessLevel": "Write", "resourceTypes": { "deliverystream": { "required": true } } } };

    /**
     * Creates a delivery stream.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html
     */
    public createDeliveryStream () {
        this.add('firehose:CreateDeliveryStream');
        return this;
    }

    /**
     * Deletes a delivery stream and its data.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html
     */
    public deleteDeliveryStream () {
        this.add('firehose:DeleteDeliveryStream');
        return this;
    }

    /**
     * Describes the specified delivery stream and gets the status.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html
     */
    public describeDeliveryStream () {
        this.add('firehose:DescribeDeliveryStream');
        return this;
    }

    /**
     * Lists your delivery streams.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html
     */
    public listDeliveryStreams () {
        this.add('firehose:ListDeliveryStreams');
        return this;
    }

    /**
     * Lists the tags for the specified delivery stream.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html
     */
    public listTagsForDeliveryStream () {
        this.add('firehose:ListTagsForDeliveryStream');
        return this;
    }

    /**
     * Writes a single data record into an Amazon Kinesis Firehose delivery stream.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html
     */
    public putRecord () {
        this.add('firehose:PutRecord');
        return this;
    }

    /**
     * Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html
     */
    public putRecordBatch () {
        this.add('firehose:PutRecordBatch');
        return this;
    }

    /**
     * Enables server-side encryption (SSE) for the delivery stream.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html
     */
    public startDeliveryStreamEncryption () {
        this.add('firehose:StartDeliveryStreamEncryption');
        return this;
    }

    /**
     * Disables the specified destination of the specified delivery stream.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html
     */
    public stopDeliveryStreamEncryption () {
        this.add('firehose:StopDeliveryStreamEncryption');
        return this;
    }

    /**
     * Adds or updates tags for the specified delivery stream.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_TagDeliveryStream.html
     */
    public tagDeliveryStream () {
        this.add('firehose:TagDeliveryStream');
        return this;
    }

    /**
     * Removes tags from the specified delivery stream.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_UntagDeliveryStream.html
     */
    public untagDeliveryStream () {
        this.add('firehose:UntagDeliveryStream');
        return this;
    }

    /**
     * Updates the specified destination of the specified delivery stream.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html
     */
    public updateDestination () {
        this.add('firehose:UpdateDestination');
        return this;
    }
}
