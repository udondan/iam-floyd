import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service ebs
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticblockstore.html
 */
export class Ebs extends PolicyStatement {
    public servicePrefix = 'ebs';
    public actions : Actions = { "GetSnapshotBlock": { "url": "https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html", "description": "Grants permission to return the data of a block in an Amazon Elastic Block Store (EBS) snapshot", "accessLevel": "Read", "resourceTypes": { "snapshot": { "required": true } } }, "ListChangedBlocks": { "url": "https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html", "description": "Grants permission to list the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store (EBS) snapshots of the same volume/snapshot lineage", "accessLevel": "Read", "resourceTypes": { "snapshot": { "required": true } } }, "ListSnapshotBlocks": { "url": "https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html", "description": "Grants permission to list the block indexes and block tokens for blocks in an Amazon Elastic Block Store (EBS) snapshot.", "accessLevel": "Read", "resourceTypes": { "snapshot": { "required": true } } } };

    /**
     * Grants permission to return the data of a block in an Amazon Elastic Block Store (EBS) snapshot
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html
     */
    public getSnapshotBlock () {
        this.add('ebs:GetSnapshotBlock');
        return this;
    }

    /**
     * Grants permission to list the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store (EBS) snapshots of the same volume/snapshot lineage
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html
     */
    public listChangedBlocks () {
        this.add('ebs:ListChangedBlocks');
        return this;
    }

    /**
     * Grants permission to list the block indexes and block tokens for blocks in an Amazon Elastic Block Store (EBS) snapshot.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html
     */
    public listSnapshotBlocks () {
        this.add('ebs:ListSnapshotBlocks');
        return this;
    }
}
