$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("qa/quotation/qaquotation.feature");
formatter.feature({
  "line": 2,
  "name": "QA Quotation Engine - Verify that a member is entitle to get a loan.",
  "description": "\nAs a  admin\nI want to utilise endpoint of the QA Quotation Engine API\u0027s\nSo I can verify the loan been given to a member",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@qaquatation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify interest rate is return",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-interest-rate-is-return",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    },
    {
      "line": 8,
      "name": "@interest_rate"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Create a new member using the POST request",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Create a new quote for the member using POST request with \"\u003camount_to_borrow\u003e\" for \"\u003ccurrent_salary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Interest rate is verified from the response and not null",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-interest-rate-is-return;",
  "rows": [
    {
      "cells": [
        "current_salary",
        "amount_to_borrow"
      ],
      "line": 15,
      "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-interest-rate-is-return;;1"
    },
    {
      "cells": [
        "30000",
        "15000"
      ],
      "line": 16,
      "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-interest-rate-is-return;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 529621153,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify interest rate is return",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-interest-rate-is-return;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@qaquatation"
    },
    {
      "line": 8,
      "name": "@sanity"
    },
    {
      "line": 8,
      "name": "@interest_rate"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Create a new member using the POST request",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Create a new quote for the member using POST request with \"15000\" for \"30000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Interest rate is verified from the response and not null",
  "keyword": "Then "
});
formatter.match({
  "location": "QaQuotationSteps.createANewMemberPostRequest()"
});
formatter.result({
  "duration": 1810436995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 59
    },
    {
      "val": "30000",
      "offset": 71
    }
  ],
  "location": "QaQuotationSteps.createANewQuoteForTheMemberUsingPOSTRequestWithFor(String,String)"
});
formatter.result({
  "duration": 1296542749,
  "status": "passed"
});
formatter.match({
  "location": "QaQuotationSteps.verifyANewQuoteForMemberPOSTRequest()"
});
formatter.result({
  "duration": 18913340,
  "status": "passed"
});
formatter.after({
  "duration": 55888,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify quoteOffered as false",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-quoteoffered-as-false",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    },
    {
      "line": 19,
      "name": "@quote_offered"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#    Given registered member using the POST request"
    }
  ],
  "line": 22,
  "name": "Create a new member using the POST request",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Create a new quote for the member using POST request with \"\u003camount_to_borrow\u003e\" for \"\u003ccurrent_salary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "quoteOffered return false",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-quoteoffered-as-false;",
  "rows": [
    {
      "cells": [
        "current_salary",
        "amount_to_borrow"
      ],
      "line": 26,
      "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-quoteoffered-as-false;;1"
    },
    {
      "cells": [
        "1000",
        "2500"
      ],
      "line": 27,
      "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-quoteoffered-as-false;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 353729594,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify quoteOffered as false",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-quoteoffered-as-false;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@quote_offered"
    },
    {
      "line": 1,
      "name": "@qaquatation"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#    Given registered member using the POST request"
    }
  ],
  "line": 22,
  "name": "Create a new member using the POST request",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Create a new quote for the member using POST request with \"2500\" for \"1000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "quoteOffered return false",
  "keyword": "Then "
});
formatter.match({
  "location": "QaQuotationSteps.createANewMemberPostRequest()"
});
formatter.result({
  "duration": 223419358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 59
    },
    {
      "val": "1000",
      "offset": 70
    }
  ],
  "location": "QaQuotationSteps.createANewQuoteForTheMemberUsingPOSTRequestWithFor(String,String)"
});
formatter.result({
  "duration": 1350359036,
  "status": "passed"
});
formatter.match({
  "location": "QaQuotationSteps.quoteofferedReturnFalse()"
});
formatter.result({
  "duration": 14263659,
  "status": "passed"
});
formatter.after({
  "duration": 21969,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Verify a non-existent member",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-a-non-existent-member",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@sanity"
    },
    {
      "line": 29,
      "name": "@non_exist_member"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Create a new quote for the non existent member using POST request with \"\u003camount_to_borrow\u003e\" for \"\u003ccurrent_salary\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "error message appeared with 404",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-a-non-existent-member;",
  "rows": [
    {
      "cells": [
        "current_salary",
        "amount_to_borrow"
      ],
      "line": 34,
      "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-a-non-existent-member;;1"
    },
    {
      "cells": [
        "100000",
        "24000"
      ],
      "line": 35,
      "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-a-non-existent-member;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 149050776,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify a non-existent member",
  "description": "",
  "id": "qa-quotation-engine---verify-that-a-member-is-entitle-to-get-a-loan.;verify-a-non-existent-member;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@non_exist_member"
    },
    {
      "line": 1,
      "name": "@qaquatation"
    },
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Create a new quote for the non existent member using POST request with \"24000\" for \"100000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "error message appeared with 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24000",
      "offset": 72
    },
    {
      "val": "100000",
      "offset": 84
    }
  ],
  "location": "QaQuotationSteps.createANewQuoteForTheNonExistentMemberUsingPOSTRequestWithFor(String,String)"
});
formatter.result({
  "duration": 952404092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 28
    }
  ],
  "location": "QaQuotationSteps.errorMessageAppearedWith(int)"
});
formatter.result({
  "duration": 6522039,
  "status": "passed"
});
formatter.after({
  "duration": 20873,
  "status": "passed"
});
});