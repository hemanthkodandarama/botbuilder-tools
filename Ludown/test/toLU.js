/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const chai = require('chai');
const assert = chai.assert;
const toLU = require('../lib/toLU');
const path = require('path');
const exception = require('../lib/classes/exception');
const retCode = require('../lib/enums/CLI-errors');
describe('With toLU module', function() {
    
    it('throws when input file does not parse as luis content', function(done) {
        let invalidFile = path.resolve('./test/1.lu')
        toLU.generateMarkdown({LUIS_File:invalidFile})
            .then(res => done('Test fail! Did not throw when expected'))
            .catch(err => {
                assert.equal(new exception(err).errCode, retCode.errorCode.FILE_OPEN_ERROR);
                done();
            })
    });

    // composites
    it('throws when input file has composite entities', function(done) {
        let invalidFile = path.resolve('./test/testcases/InvalidLUISModel.json')
        toLU.generateMarkdown({LUIS_File:invalidFile})
            .then(res => done('Test fail! Did not throw when expected'))
            .catch(err => {
                assert.equal(new exception(err).errCode, retCode.errorCode.INVALID_INPUT_FILE);
                done();
            })
    });

    it('throws when input file has regex entities', function(done) {
        let invalidFile = path.resolve('./test/testcases/InvalidLUISModel1.json')
        toLU.generateMarkdown({LUIS_File:invalidFile})
            .then(res => done('Test fail! Did not throw when expected'))
            .catch(err => {
                assert.equal(new exception(err).errCode, retCode.errorCode.INVALID_INPUT_FILE);
                done();
            })
    });

    it('throws when input file has regex features', function(done) {
        let invalidFile = path.resolve('./test/testcases/InvalidLUISModel2.json')
        toLU.generateMarkdown({LUIS_File:invalidFile})
            .then(res => done('Test fail! Did not throw when expected'))
            .catch(err => {
                assert.equal(new exception(err).errCode, retCode.errorCode.INVALID_INPUT_FILE);
                done();
            })
    });

    it('throws when input file does not parse as qna content', function(done) {
        let invalidFile = path.resolve('./test/1.lu')
        toLU.generateMarkdown({QNA_FILE:invalidFile})
            .then(res => done('Test fail! Did not throw when expected'))
            .catch(err => {
                assert.equal(new exception(err).errCode, retCode.errorCode.FILE_OPEN_ERROR);
                done();
            })
    }); 

    it('throws when input file does not parse as qna content', function(done) {
        let invalidFile = path.resolve('./examples/1.lu')
        toLU.generateMarkdown({LUIS_File:invalidFile})
            .then(res => done('Test fail! Did not throw when expected'))
            .catch(err => {
                assert.equal(new exception(err).errCode, retCode.errorCode.INVALID_INPUT_FILE);
                done();
            })
    });

    it('throws when input file does not parse as LUIS content', function(done) {
        let invalidFile = path.resolve('./examples/1.lu')
        toLU.generateMarkdown({QNA_FILE:invalidFile})
            .then(res => done('Test fail! Did not throw when expected'))
            .catch(err => {
                assert.equal(new exception(err).errCode, retCode.errorCode.INVALID_INPUT_FILE);
                done();
            })
    });

});