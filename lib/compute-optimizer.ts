import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service compute-optimizer
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_computeoptimizer.html
 */
export class ComputeOptimizer extends PolicyStatement {
    public servicePrefix = 'compute-optimizer';
    public actions : Actions = { "GetAutoScalingGroupRecommendations": { "url": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetAutoScalingGroupRecommendations.html", "description": "Grants permission to get recommendations for the provided autoscaling groups.", "accessLevel": "List" }, "GetEC2InstanceRecommendations": { "url": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2InstanceRecommendations.html", "description": "Grants permission to get recommendations for the provided EC2 instances.", "accessLevel": "List" }, "GetEC2RecommendationProjectedMetrics": { "url": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2RecommendationProjectedMetrics.html", "description": "Grants permission to get the recommendation projected metrics of the specified instance.", "accessLevel": "List" }, "GetEnrollmentStatus": { "url": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatus.html", "description": "Grants permission to get the enrollment status for the specified account.", "accessLevel": "List" }, "GetRecommendationSummaries": { "url": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationSummaries.html", "description": "Grants permission to get the recommendation summaries for the specified account(s).", "accessLevel": "List" }, "UpdateEnrollmentStatus": { "url": "https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_UpdateEnrollmentStatus.html", "description": "Grants permission to update the enrollment status.", "accessLevel": "Write" } };

    /**
     * Grants permission to get recommendations for the provided autoscaling groups.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetAutoScalingGroupRecommendations.html
     */
    public getAutoScalingGroupRecommendations () {
        this.add('compute-optimizer:GetAutoScalingGroupRecommendations');
        return this;
    }

    /**
     * Grants permission to get recommendations for the provided EC2 instances.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2InstanceRecommendations.html
     */
    public getEC2InstanceRecommendations () {
        this.add('compute-optimizer:GetEC2InstanceRecommendations');
        return this;
    }

    /**
     * Grants permission to get the recommendation projected metrics of the specified instance.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2RecommendationProjectedMetrics.html
     */
    public getEC2RecommendationProjectedMetrics () {
        this.add('compute-optimizer:GetEC2RecommendationProjectedMetrics');
        return this;
    }

    /**
     * Grants permission to get the enrollment status for the specified account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatus.html
     */
    public getEnrollmentStatus () {
        this.add('compute-optimizer:GetEnrollmentStatus');
        return this;
    }

    /**
     * Grants permission to get the recommendation summaries for the specified account(s).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationSummaries.html
     */
    public getRecommendationSummaries () {
        this.add('compute-optimizer:GetRecommendationSummaries');
        return this;
    }

    /**
     * Grants permission to update the enrollment status.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_UpdateEnrollmentStatus.html
     */
    public updateEnrollmentStatus () {
        this.add('compute-optimizer:UpdateEnrollmentStatus');
        return this;
    }
}
