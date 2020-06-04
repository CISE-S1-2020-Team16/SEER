const evidenceModel = require('../models/evidenceModel');
const articleModel = require('../models/articleModel');
const bookModel = require('../models/bookModel');
const bookletModel = require('../models/bookletModel');
const conferenceModel = require('../models/conferenceModel');
const inbookModel = require('../models/inbookModel');
const incollectionModel = require('../models/incollectionModel');
const inproceedingsModel = require('../models/inproceedingsModel');
const manualModel = require('../models/manualModel');
const masterModel = require('../models/masterModel');
const miscModel = require('../models/miscModel');
const phdModel = require('../models/phdModel');
const proceedingsModel = require('../models/proceedingsModel');
const techreportModel = require('../models/techreportModel');
const unpublishedModel = require('../models/unpublishedModel');

//Create Evidence 
createEvidence = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'empty-evidence-body',
        })
    }

    var evidence;

    //Switch depending on type of evidence
    switch (body.type) {
        case article:
            evidence = new articleModel(body)
            break;
        case book:
            evidence = new bookModel(body)
            break;
        case booklet:
            evidence = new bookletModel(body)
            break;
        case conference:
            evidence = new conferenceModel(body)
            break;
        case inbook:
            evidence = new inbookModel(body)
            break;
        case incollection:
            evidence = new incollectionModel(body)
            break;
        case inproceedings:
            evidence = new inproceedingsModel(body)
            break;
        case manual:
            evidence = new manualModel(body)
            break;
        case masterthesis:
            evidence = new masterModel(body)
            break;
        case misc:
            evidence = new miscModel(body)
            break;
        case phdthesis:
            evidence = new phdModel(body)
            break;
        case proceedings:
            evidence = new proceedingsModel(body)
            break;
        case techreport:
            evidence = new techreportModel(body)
            break;
        case unpublished:
            evidence = new unpublishedModel(body)
            break;
        default:
            break;
    }
    
    if (!evidence) {
        return res.status(400).json({ success: false, error: err })
    } else{
        evidence
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: article._id,
                message: 'evidence-created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'evidence-not-created',
            })
        });
    }
};

//Retrieve Evidence
getEvidencebyID

getEvidencebyTitle

getEvidencebyAuthor

getEvidencebyMethod

getEvidencebyMethodology
