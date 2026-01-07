package com.example.ecomm;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestConnection {

    public static void main(String[] args) {

        String url = "jdbc:postgresql://localhost:5432/ecomm_db";
        String user = "postgres";
        String password = "Tasneem262002";

        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connection to ecomm_db successful!");
            conn.close();
        } catch (Exception e) {
            System.out.println("Connection failed!");
            e.printStackTrace();
        }
    }
}
