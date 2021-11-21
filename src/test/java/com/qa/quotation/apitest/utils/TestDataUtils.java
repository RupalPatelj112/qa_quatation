package com.qa.quotation.apitest.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class TestDataUtils {

    private static final String JOB_TITLE ="jobtitle";
    private static final String MEMBER_ID = "member_id";


    private static Properties properties;

    public static void load() {
        properties = new Properties();

        try (InputStream inputStream = TestDataUtils.class.getClassLoader().getResourceAsStream(ConfigUtils.getTestdataFile())) {
            properties.load(inputStream);
        } catch (IOException e) {
            System.err.println("Unable to load properties file : " + ConfigUtils.getTestdataFile());
        }
    }

    public static boolean isLoaded() {
        return properties != null;
    }



    public static String jobtitle() {
        return properties.getProperty(JOB_TITLE);
    }

    public static String getMember(){
        return properties.getProperty(MEMBER_ID);
    }


}