package com.qa.quotation.apitest.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json"},
        glue = {"com.qa.quotation.apitest.stepDefinitions"},
        features = {"src/test/resources/features"},
        tags = {"@sanity"},
        format = {"pretty", "html:target/report"}
)
public class TestRunner {
}