import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [iq](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iq extends PolicyStatement {
  public servicePrefix = 'iq';

  /**
   * Statement provider for service [iq](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept an incoming voice/video call
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toAcceptCall() {
    return this.to('AcceptCall');
  }

  /**
   * Grants permission to approve a payment request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toApprovePaymentRequest() {
    return this.to('ApprovePaymentRequest');
  }

  /**
   * Grants permission to approve a proposal
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toApproveProposal() {
    return this.to('ApproveProposal');
  }

  /**
   * Grants permission to archive a conversation
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toArchiveConversation() {
    return this.to('ArchiveConversation');
  }

  /**
   * Grants permission to complete a proposal
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCompleteProposal() {
    return this.to('CompleteProposal');
  }

  /**
   * Grants permission to respond to a request or send a direct message to initiate a conversation
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateConversation() {
    return this.to('CreateConversation');
  }

  /**
   * Grants permission to create an expert profile
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateExpert() {
    return this.to('CreateExpert');
  }

  /**
   * Grants permission to create a listing
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateListing() {
    return this.to('CreateListing');
  }

  /**
   * Grants permission to create a milestone proposal
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateMilestoneProposal() {
    return this.to('CreateMilestoneProposal');
  }

  /**
   * Grants permission to create a payment request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreatePaymentRequest() {
    return this.to('CreatePaymentRequest');
  }

  /**
   * Grants permission to submit new requests
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to submit new requests
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateRequest() {
    return this.to('CreateRequest');
  }

  /**
   * Grants permission to create a scheduled proposal
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateScheduledProposal() {
    return this.to('CreateScheduledProposal');
  }

  /**
   * Grants permission to create a seller profile
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateSeller() {
    return this.to('CreateSeller');
  }

  /**
   * Grants permission to create an upfront proposal
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreateUpfrontProposal() {
    return this.to('CreateUpfrontProposal');
  }

  /**
   * Grants permission to decline an incoming voice/video call
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toDeclineCall() {
    return this.to('DeclineCall');
  }

  /**
   * Grants permission to delete an existing attachment
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toDeleteAttachment() {
    return this.to('DeleteAttachment');
  }

  /**
   * Grants permission to disable individual public profile page
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toDisableIndividualPublicProfile() {
    return this.to('DisableIndividualPublicProfile');
  }

  /**
   * Grants permission to download existing attachment
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toDownloadAttachment() {
    return this.to('DownloadAttachment');
  }

  /**
   * Grants permission to enable individual public profile page
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toEnableIndividualPublicProfile() {
    return this.to('EnableIndividualPublicProfile');
  }

  /**
   * Grants permission to end a voice/video call
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toEndCall() {
    return this.to('EndCall');
  }

  /**
   * Grants permission to read buyer information
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetBuyer() {
    return this.to('GetBuyer');
  }

  /**
   * Grants permission to read details of a voice/video call
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetCall() {
    return this.to('GetCall');
  }

  /**
   * Grants permission to read the chat environment details about a conversation
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetChatInfo() {
    return this.to('GetChatInfo');
  }

  /**
   * Grants permission to read chat messages in a conversation
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetChatMessages() {
    return this.to('GetChatMessages');
  }

  /**
   * Grants permission to request a websocket token for the conversation notifications
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetChatToken() {
    return this.to('GetChatToken');
  }

  /**
   * Grants permission to read chat messages in a company conversation
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetCompanyChatMessages() {
    return this.to('GetCompanyChatMessages');
  }

  /**
   * Grants permission to read a company profile
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetCompanyProfile() {
    return this.to('GetCompanyProfile');
  }

  /**
   * Grants permission to read details of a conversation
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetConversation() {
    return this.to('GetConversation');
  }

  /**
   * Grants permission to read expert information
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetExpert() {
    return this.to('GetExpert');
  }

  /**
   * Grants permission to read a listing
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetListing() {
    return this.to('GetListing');
  }

  /**
   * Grants permission to read a seller profile information
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetMarketplaceSeller() {
    return this.to('GetMarketplaceSeller');
  }

  /**
   * Grants permission to read a payment request
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetPaymentRequest() {
    return this.to('GetPaymentRequest');
  }

  /**
   * Grants permission to read a proposal
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetProposal() {
    return this.to('GetProposal');
  }

  /**
   * Grants permission to get a created request
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetRequest() {
    return this.to('GetRequest');
  }

  /**
   * Grants permission to read a review for an expert
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetReview() {
    return this.to('GetReview');
  }

  /**
   * Grants permission to hide a request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toHideRequest() {
    return this.to('HideRequest');
  }

  /**
   * Grants permission to start a voice/video call
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toInitiateCall() {
    return this.to('InitiateCall');
  }

  /**
   * Grants permission to link an AWS certification to individual profile
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toLinkAwsCertification() {
    return this.to('LinkAwsCertification');
  }

  /**
   * Grants permission to list existing attachments
   *
   * Access Level: List
   *
   * https://aws.amazon.com/iq/
   */
  public toListAttachments() {
    return this.to('ListAttachments');
  }

  /**
   * Grants permission to list existing conversations
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListConversations() {
    return this.to('ListConversations');
  }

  /**
   * Grants permission to list access logs of expert activity
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListExpertAccessLogs() {
    return this.to('ListExpertAccessLogs');
  }

  /**
   * Grants permission to list listings
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListListings() {
    return this.to('ListListings');
  }

  /**
   * Grants permission to list payment requests
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListPaymentRequests() {
    return this.to('ListPaymentRequests');
  }

  /**
   * Grants permission to list proposals
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListProposals() {
    return this.to('ListProposals');
  }

  /**
   * Grants permission to list requests that are created
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListRequests() {
    return this.to('ListRequests');
  }

  /**
   * Grants permission to list reviews for an expert
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListReviews() {
    return this.to('ListReviews');
  }

  /**
   * Grants permission to mark a message as read in a conversation
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toMarkChatMessageRead() {
    return this.to('MarkChatMessageRead');
  }

  /**
   * Grants permission to reject a payment request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toRejectPaymentRequest() {
    return this.to('RejectPaymentRequest');
  }

  /**
   * Grants permission to reject a proposal
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toRejectProposal() {
    return this.to('RejectProposal');
  }

  /**
   * Grants permission to send a message in a conversation as a company
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toSendCompanyChatMessage() {
    return this.to('SendCompanyChatMessage');
  }

  /**
   * Grants permission to send a message in a conversation as an individual
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toSendIndividualChatMessage() {
    return this.to('SendIndividualChatMessage');
  }

  /**
   * Grants permission to unarchive a conversation
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUnarchiveConversation() {
    return this.to('UnarchiveConversation');
  }

  /**
   * Grants permission to unlink an AWS certification from individual profile
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUnlinkAwsCertification() {
    return this.to('UnlinkAwsCertification');
  }

  /**
   * Grants permission to update a company profile
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUpdateCompanyProfile() {
    return this.to('UpdateCompanyProfile');
  }

  /**
   * Grants permission to add more participants into a conversation
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUpdateConversationMembers() {
    return this.to('UpdateConversationMembers');
  }

  /**
   * Grants permission to update an expert information
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUpdateExpert() {
    return this.to('UpdateExpert');
  }

  /**
   * Grants permission to update a listing
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUpdateListing() {
    return this.to('UpdateListing');
  }

  /**
   * Grants permission to update a request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUpdateRequest() {
    return this.to('UpdateRequest');
  }

  /**
   * Grants permission to upload an attachment
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toUploadAttachment() {
    return this.to('UploadAttachment');
  }

  /**
   * Grants permission to withdraw a payment request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toWithdrawPaymentRequest() {
    return this.to('WithdrawPaymentRequest');
  }

  /**
   * Grants permission to withdraw a proposal
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toWithdrawProposal() {
    return this.to('WithdrawProposal');
  }

  /**
   * Grants permission to write a review for an expert
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toWriteReview() {
    return this.to('WriteReview');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptCall',
      'ApprovePaymentRequest',
      'ApproveProposal',
      'ArchiveConversation',
      'CompleteProposal',
      'CreateConversation',
      'CreateExpert',
      'CreateListing',
      'CreateMilestoneProposal',
      'CreatePaymentRequest',
      'CreateProject',
      'CreateRequest',
      'CreateScheduledProposal',
      'CreateSeller',
      'CreateUpfrontProposal',
      'DeclineCall',
      'DeleteAttachment',
      'DisableIndividualPublicProfile',
      'EnableIndividualPublicProfile',
      'EndCall',
      'HideRequest',
      'InitiateCall',
      'LinkAwsCertification',
      'MarkChatMessageRead',
      'RejectPaymentRequest',
      'RejectProposal',
      'SendCompanyChatMessage',
      'SendIndividualChatMessage',
      'UnarchiveConversation',
      'UnlinkAwsCertification',
      'UpdateCompanyProfile',
      'UpdateConversationMembers',
      'UpdateExpert',
      'UpdateListing',
      'UpdateRequest',
      'UploadAttachment',
      'WithdrawPaymentRequest',
      'WithdrawProposal',
      'WriteReview'
    ],
    Read: [
      'DownloadAttachment',
      'GetBuyer',
      'GetCall',
      'GetChatInfo',
      'GetChatMessages',
      'GetChatToken',
      'GetCompanyChatMessages',
      'GetCompanyProfile',
      'GetConversation',
      'GetExpert',
      'GetListing',
      'GetMarketplaceSeller',
      'GetPaymentRequest',
      'GetProposal',
      'GetRequest',
      'GetReview',
      'ListConversations',
      'ListExpertAccessLogs',
      'ListListings',
      'ListPaymentRequests',
      'ListProposals',
      'ListRequests',
      'ListReviews'
    ],
    List: [
      'ListAttachments'
    ]
  };

  /**
   * Adds a resource of type conversation to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param conversationId - Identifier for the conversationId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConversation(conversationId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::conversation/${ conversationId }`);
  }

  /**
   * Adds a resource of type buyer to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param buyerId - Identifier for the buyerId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBuyer(buyerId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::buyer/${ buyerId }`);
  }

  /**
   * Adds a resource of type expert to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param expertId - Identifier for the expertId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExpert(expertId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::expert/${ expertId }`);
  }

  /**
   * Adds a resource of type call to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param callId - Identifier for the callId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCall(callId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::call/${ callId }`);
  }

  /**
   * Adds a resource of type token to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param tokenId - Identifier for the tokenId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onToken(tokenId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::token/${ tokenId }`);
  }

  /**
   * Adds a resource of type proposal to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param conversationId - Identifier for the conversationId.
   * @param proposalId - Identifier for the proposalId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProposal(conversationId: string, proposalId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::proposal/${ conversationId }/${ proposalId }`);
  }

  /**
   * Adds a resource of type paymentRequest to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param conversationId - Identifier for the conversationId.
   * @param proposalId - Identifier for the proposalId.
   * @param paymentRequestId - Identifier for the paymentRequestId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPaymentRequest(conversationId: string, proposalId: string, paymentRequestId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::paymentRequest/${ conversationId }/${ proposalId }/${ paymentRequestId }`);
  }

  /**
   * Adds a resource of type paymentSchedule to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param conversationId - Identifier for the conversationId.
   * @param proposalId - Identifier for the proposalId.
   * @param versionId - Identifier for the versionId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPaymentSchedule(conversationId: string, proposalId: string, versionId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::paymentSchedule/${ conversationId }/${ proposalId }/${ versionId }`);
  }

  /**
   * Adds a resource of type seller to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param sellerAwsAccountId - Identifier for the sellerAwsAccountId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSeller(sellerAwsAccountId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::seller/${ sellerAwsAccountId }`);
  }

  /**
   * Adds a resource of type company to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param companyId - Identifier for the companyId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCompany(companyId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::company/${ companyId }`);
  }

  /**
   * Adds a resource of type request to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param requestId - Identifier for the requestId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRequest(requestId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::request/${ requestId }`);
  }

  /**
   * Adds a resource of type listing to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param listingId - Identifier for the listingId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onListing(listingId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::listing/${ listingId }`);
  }

  /**
   * Adds a resource of type attachment to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param attachmentId - Identifier for the attachmentId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAttachment(attachmentId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq:${ region ?? this.defaultRegion }::attachment/${ attachmentId }`);
  }

  /**
   * Adds a resource of type permission to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param permissionRequestId - Identifier for the permissionRequestId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPermission(permissionRequestId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq-permission:${ region ?? this.defaultRegion }::permission/${ permissionRequestId }`);
  }
}
