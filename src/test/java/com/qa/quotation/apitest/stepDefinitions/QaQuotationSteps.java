package com.qa.quotation.apitest.stepDefinitions;

import com.qa.quotation.apitest.requests.quotation.QaQuotation;
import com.qa.quotation.apitest.service.AbstractSteps;
import com.qa.quotation.apitest.utils.TestDataRecord;
import com.qa.quotation.apitest.utils.TestDataUtils;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;


import static com.qa.quotation.apitest.constants.ScenarioKeys.*;
import static org.hamcrest.CoreMatchers.*;

public class QaQuotationSteps extends AbstractSteps {

    private QaQuotation qaquotation;
    private TestDataRecord testDataRecord;

    public QaQuotationSteps() {
        qaquotation = new QaQuotation();
        testDataRecord = new TestDataRecord();
    }

    @Before
    public void beforeEachScenario() {
        super.beforeEachScenario();
    }

    @Given("^Create a new member using the POST request$")
    public void createANewMemberPostRequest() {
        Response response = qaquotation.postNewMember();
        String memberId = response.jsonPath().get("memberId");
        response
                .then()
                .log()
                .all()
                .statusCode(201)
                .body("memberId", equalTo(memberId));

        getScenarioContext().set(MEMBER_ID, memberId);
        getScenarioContext().setResponse(response);
    }

//    @And("^Create a new quote for the member using POST request$")
//    public void createANewQuoteForMemberPOSTRequest() {
//        String memberId = getScenarioContext().getString(MEMBER_ID);
//        Response response = qaquotation.postQuote(memberId);
//        getScenarioContext().setResponse(response);
//
//        response.then()
//                .statusCode(200)
//                .log().all()
//                .body("memberId", equalTo(memberId))
//                .body("interestRate", notNullValue());
//    }

    @When("^Verify the the existing member$")
    public void thenVerifyTheMemberWasCreatedWithCorrectData() {
        String memberId = getScenarioContext().getString(MEMBER_ID);
        Response response = qaquotation.VerifyMemberCreated();
        response
                .then()
                .statusCode(200)
                .log()
                .all()
                .body("memberId", equalTo(memberId));

        getScenarioContext().setResponse(response);
    }


    @After
    public void afterEachScenario() {
        super.afterEachScenario();
    }


    @When("^Create a new quote for the member using POST request with \"([^\"]*)\" for \"([^\"]*)\"$")
    public void createANewQuoteForTheMemberUsingPOSTRequestWithFor(String amount_to_borrow, String current_salary){
        String memberId = getScenarioContext().getString(MEMBER_ID);
        Response response = qaquotation.postQuote(memberId, current_salary, amount_to_borrow);
        response.then()
                .statusCode(200)
                .log().all()
                .body("memberId", equalTo(memberId));
        getScenarioContext().setResponse(response);
    }

    @Then("^Interest rate is verified from the response and not null$")
    public void verifyANewQuoteForMemberPOSTRequest(){
        Response response = getScenarioContext().getResponse();
        float interestRate = response.jsonPath().get("interestRate");

        response.then()
                .statusCode(200)
                .log().all()
                .body("interestRate", equalTo(interestRate));
    }

    @Given("^registered member using the POST request$")
    public void registeredMemberUsingThePOSTRequest() {
        String memberId = TestDataUtils.getMember();
        Response response = qaquotation.VerifyMemberCreated();
        response
                .then()
                .statusCode(400)
                .log()
                .all();

        getScenarioContext().setResponse(response);
    }

    @Then("^quoteOffered return false$")
    public void quoteofferedReturnFalse() {
        Response response = getScenarioContext().getResponse();
        boolean quoteOffered = response.jsonPath().get("quoteOffered");

        response.then()
                .statusCode(200)
                .log().all()
                .body("quoteOffered", equalTo(false));

    }


    @Then("^error message appeared with (\\d+)$")
    public void errorMessageAppearedWith(int status_code) {
        Response response = getScenarioContext().getResponse();
        String message = "No Member exists for memberId=" + TestDataUtils.getMember();

        response.then()
                .statusCode(status_code)
                .log().all()
                .body("message", equalTo(message));
    }

    @Given("^Create a new quote for the non existent member using POST request with \"([^\"]*)\" for \"([^\"]*)\"$")
    public void createANewQuoteForTheNonExistentMemberUsingPOSTRequestWithFor(String amount_to_borrow, String current_salary){
        String memberId = TestDataUtils.getMember();
        Response response = qaquotation.postQuote(memberId, current_salary, amount_to_borrow);

        response.then()
                .statusCode(404)
                .log().all();
        getScenarioContext().setResponse(response);

    }
}
