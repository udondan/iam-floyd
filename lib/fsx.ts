import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service fsx
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfsx.html
 */
export class Fsx extends PolicyStatement {
    public servicePrefix = 'fsx';
    public actions : Actions = { "CancelDataRepositoryTask": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html", "description": "This action cancels a data repository task", "accessLevel": "Write", "resourceTypes": { "task": { "required": true } } }, "CreateBackup": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html", "description": "This action creates a new backup.", "accessLevel": "Tagging", "resourceTypes": { "backup": { "required": true }, "file-system": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateDataRepositoryTask": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html", "description": "This action creates a new task.", "accessLevel": "Tagging", "resourceTypes": { "file-system": { "required": true }, "task": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateFileSystem": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html", "description": "This action creates a new, empty, Amazon FSx file system", "accessLevel": "Tagging", "resourceTypes": { "file-system": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateFileSystemFromBackup": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html", "description": "This action creates a new Amazon FSx file system from an existing backup.", "accessLevel": "Tagging", "resourceTypes": { "backup": { "required": true }, "file-system": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DeleteBackup": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html", "description": "This action deletes a backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.", "accessLevel": "Write", "resourceTypes": { "backup": { "required": true } } }, "DeleteFileSystem": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html", "description": "This action deletes a file system, deleting its contents.", "accessLevel": "Write", "resourceTypes": { "file-system": { "required": true } } }, "DescribeBackups": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html", "description": "This action returns the description of specific Amazon FSx backups, if one or more BackupIds are provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling.", "accessLevel": "Read" }, "DescribeDataRepositoryTasks": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html", "description": "This action returns the description of specific Amazon FSx data repository task, if one or more TaskIds are provided for that data repository task. Otherwise, it returns all data repository task owned by your AWS account in the AWS Region of the endpoint that you're calling.", "accessLevel": "Read" }, "DescribeFileSystems": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html", "description": "This action returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling.", "accessLevel": "Read" }, "ListTagsForResource": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html", "description": "This action lists tags for an Amazon FSx resource.", "accessLevel": "Read", "resourceTypes": { "backup": { "required": false }, "file-system": { "required": false }, "task": { "required": false } } }, "TagResource": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_TagResource.html", "description": "This action tags an Amazon FSx resource.", "accessLevel": "Tagging", "resourceTypes": { "backup": { "required": false }, "file-system": { "required": false }, "task": { "required": false } }, "conditions": ["aws:TagKeys", "aws:RequestTag/${TagKey}"] }, "UntagResource": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html", "description": "This action removes a tag from an Amazon FSx resource.", "accessLevel": "Tagging", "resourceTypes": { "backup": { "required": false }, "file-system": { "required": false }, "task": { "required": false } }, "conditions": ["aws:TagKeys"] }, "UpdateFileSystem": { "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html", "description": "This action updates file system configuration.", "accessLevel": "Write", "resourceTypes": { "file-system": { "required": true } } } };

    /**
     * This action cancels a data repository task
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html
     */
    public cancelDataRepositoryTask () {
        this.add('fsx:CancelDataRepositoryTask');
        return this;
    }

    /**
     * This action creates a new backup.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html
     */
    public createBackup () {
        this.add('fsx:CreateBackup');
        return this;
    }

    /**
     * This action creates a new task.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html
     */
    public createDataRepositoryTask () {
        this.add('fsx:CreateDataRepositoryTask');
        return this;
    }

    /**
     * This action creates a new, empty, Amazon FSx file system
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html
     */
    public createFileSystem () {
        this.add('fsx:CreateFileSystem');
        return this;
    }

    /**
     * This action creates a new Amazon FSx file system from an existing backup.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html
     */
    public createFileSystemFromBackup () {
        this.add('fsx:CreateFileSystemFromBackup');
        return this;
    }

    /**
     * This action deletes a backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html
     */
    public deleteBackup () {
        this.add('fsx:DeleteBackup');
        return this;
    }

    /**
     * This action deletes a file system, deleting its contents.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html
     */
    public deleteFileSystem () {
        this.add('fsx:DeleteFileSystem');
        return this;
    }

    /**
     * This action returns the description of specific Amazon FSx backups, if one or more BackupIds are provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html
     */
    public describeBackups () {
        this.add('fsx:DescribeBackups');
        return this;
    }

    /**
     * This action returns the description of specific Amazon FSx data repository task, if one or more TaskIds are provided for that data repository task. Otherwise, it returns all data repository task owned by your AWS account in the AWS Region of the endpoint that you're calling.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html
     */
    public describeDataRepositoryTasks () {
        this.add('fsx:DescribeDataRepositoryTasks');
        return this;
    }

    /**
     * This action returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html
     */
    public describeFileSystems () {
        this.add('fsx:DescribeFileSystems');
        return this;
    }

    /**
     * This action lists tags for an Amazon FSx resource.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('fsx:ListTagsForResource');
        return this;
    }

    /**
     * This action tags an Amazon FSx resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('fsx:TagResource');
        return this;
    }

    /**
     * This action removes a tag from an Amazon FSx resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('fsx:UntagResource');
        return this;
    }

    /**
     * This action updates file system configuration.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html
     */
    public updateFileSystem () {
        this.add('fsx:UpdateFileSystem');
        return this;
    }
}
