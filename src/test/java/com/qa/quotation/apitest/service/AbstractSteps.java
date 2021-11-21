package com.qa.quotation.apitest.service;

import com.qa.quotation.apitest.context.ScenarioContext;
import com.qa.quotation.apitest.context.TestContext;
import com.qa.quotation.apitest.utils.ConfigUtils;
import com.qa.quotation.apitest.utils.TestDataUtils;


public class AbstractSteps {

    private TestContext testContext;
    private ScenarioContext scenarioContext;

    public void beforeEachScenario() {
        testContext = TestContext.getTestContext();
        scenarioContext = testContext.getScenarioContext();

        if (!ConfigUtils.isLoaded()) {
            ConfigUtils.load();
        }

        if (!TestDataUtils.isLoaded()) {
            TestDataUtils.load();
        }
    }

    public void afterEachScenario(){
        testContext.reset();
    }

    public TestContext getTestContext() {
        return testContext;
    }

    public ScenarioContext getScenarioContext() {
        return scenarioContext;
    }
}