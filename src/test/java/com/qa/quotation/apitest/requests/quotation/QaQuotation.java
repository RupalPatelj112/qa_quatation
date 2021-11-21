package com.qa.quotation.apitest.requests.quotation;

import com.qa.quotation.apitest.utils.ConfigUtils;
import com.qa.quotation.apitest.constants.ServiceUrlConstants;
import com.qa.quotation.apitest.utils.TestDataUtils;
import io.restassured.response.Response;
import com.github.javafaker.Faker;

import static io.restassured.RestAssured.given;

public class QaQuotation {
    private Faker faker;
    public QaQuotation(){
        faker = new Faker();


    }

    public Response postNewMember() {
        return given()
                .header("Content-Type", "application/json")
                .log().all()
                .body("{\n" +
                        "  \"firstName\": \"" + faker.name().firstName() + "\",\n" +
                        "  \"lastName\": \"" + faker.name().lastName() + "\",\n" +
                        "  \"address\": {\n" +
                        "    \"firstLine\": \"47-49 Cottons Centre" +"\", \n" +
                        "    \"town\": \"" + faker.address().city() + "\",\n" +
                        "    \"postCode\": \"" + faker.address().zipCode() + "\"\n" +
                        "  },\n" +
                        "  \"emailAddress\": \"tony.tester@zopa.com\",\n" +
                        "  \"jobTitle\": \"" + TestDataUtils.jobtitle() + "\"\n" +
                        "}")
                .post(ConfigUtils.getBaseURL().concat(ServiceUrlConstants.NEW_MEMBER_SERVICE_URL));
    }

    public Response VerifyMemberCreated() {
        return given()
                .header("Content-Type", "application/json")
                .queryParam("memberId", "fd49dcf8-9a7e-4bf4-8307-5e49a483dccc")
                .log().all()
                .get(ConfigUtils.getBaseURL().concat(ServiceUrlConstants.NEW_MEMBER_SERVICE_URL));
    }

    public Response postQuote(String memberId, String current_salary, String amount_to_borrow) {
        return given()
                .header("Content-Type", "application/json")
                .queryParam("memberId", memberId)
                .body("{\n" +
                        "  \"currentSalary\": "+current_salary+",\n" +
                        "  \"amountToBorrow\": "+amount_to_borrow+",\n" +
                        "  \"termLength\": 24\n" +
                        "}")
                .log().all()
                .post(ConfigUtils.getBaseURL().concat(ServiceUrlConstants.POST_QUOTE_SERVICE_URL));
    }
}

