const SubmissionRepository = require('../repostitory/submissionRepository');
const SubmissionProducer = require('../producers/submissionProducer');


class SubmissionService{
    constructor(){
        this.submissionRepository = new SubmissionRepository();
    }

    async addSubmission(submissionData){
        const data = await this.submissionRepository.createSubmission(submissionData);
        if(!data) {
            // TODO: Add error handling here
            throw {messgae: "Not able to create submission"};
        }
        const response = await SubmissionProducer(submissionData);
        return {queueResponse: response, submissionData};
    }
}

module.exports = SubmissionService;