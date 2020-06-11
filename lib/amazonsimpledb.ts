import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service sdb
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpledb.html
 */
export class Sdb extends PolicyStatement {
  public servicePrefix = 'sdb';
  public actions : Actions = {
    "BatchDeleteAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_BatchDeleteAttributes.html",
      "description": "Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "BatchPutAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_BatchPutAttributes.html",
      "description": "With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call. With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "CreateDomain": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_CreateDomain.html",
      "description": "The CreateDomain operation creates a new domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteAttributes.html",
      "description": "Deletes one or more attributes associated with the item.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteDomain": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteDomain.html",
      "description": "The DeleteDomain operation deletes a domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DomainMetadata": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DomainMetadata.html",
      "description": "Returns information about the domain, including when the domain was created, the number of items and attributes, and the size of attribute names and values.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "GetAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_GetAttributes.html",
      "description": "Returns all of the attributes associated with the item.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ListDomains": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_ListDomains.html",
      "description": "Description for ListDomains",
      "accessLevel": "List"
    },
    "PutAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_PutAttributes.html",
      "description": "The PutAttributes operation creates or replaces attributes in an item.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "Select": {
      "url": "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_Select.html",
      "description": "Description for Select",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    }
  };

  /**
   * Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_BatchDeleteAttributes.html
   */
  public batchDeleteAttributes () {
    this.add('sdb:BatchDeleteAttributes');
    return this;
  }

  /**
   * With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call. With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_BatchPutAttributes.html
   */
  public batchPutAttributes () {
    this.add('sdb:BatchPutAttributes');
    return this;
  }

  /**
   * The CreateDomain operation creates a new domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_CreateDomain.html
   */
  public createDomain () {
    this.add('sdb:CreateDomain');
    return this;
  }

  /**
   * Deletes one or more attributes associated with the item.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteAttributes.html
   */
  public deleteAttributes () {
    this.add('sdb:DeleteAttributes');
    return this;
  }

  /**
   * The DeleteDomain operation deletes a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteDomain.html
   */
  public deleteDomain () {
    this.add('sdb:DeleteDomain');
    return this;
  }

  /**
   * Returns information about the domain, including when the domain was created, the number of items and attributes, and the size of attribute names and values.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DomainMetadata.html
   */
  public domainMetadata () {
    this.add('sdb:DomainMetadata');
    return this;
  }

  /**
   * Returns all of the attributes associated with the item.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_GetAttributes.html
   */
  public getAttributes () {
    this.add('sdb:GetAttributes');
    return this;
  }

  /**
   * Description for ListDomains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_ListDomains.html
   */
  public listDomains () {
    this.add('sdb:ListDomains');
    return this;
  }

  /**
   * The PutAttributes operation creates or replaces attributes in an item.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_PutAttributes.html
   */
  public putAttributes () {
    this.add('sdb:PutAttributes');
    return this;
  }

  /**
   * Description for Select
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_Select.html
   */
  public select () {
    this.add('sdb:Select');
    return this;
  }
}
