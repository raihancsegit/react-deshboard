import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Raihan", "Raihan@gmail.com", "male", 1,1,1,1,1,1,1,1,1,"active"],
  ["hafiz", "hafiz@gmail.com", "male", 1,1,1,1,1,1,1,1,1,"active"],
  ["zakaria", "zakaria@gmail.com", "male", 1,1,1,1,1,1,1,1,1,"active"],
  ["ayon", "ayon@gmail.com", "male", 1,1,1,1,1,1,1,1,1,"active"],
  ["sazzad", "sazzad@gmail.com", "male", 1,1,1,1,1,1,1,1,1,"active"],
  ["kariba", "kariba@gmail.com", "female", 1,1,1,1,1,1,1,1,1,"active"],
 
];

export default function Tables() {
  return (
    <>
      <PageTitle title="User" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Users List"
            data={datatableData}
            columns={["Name", "Email", "gender","followerCount", "followingCount", "postCount", "bookmarkCount", "profile_visibility","profile_visibility","photoNotificationOn","videoNotificationOn","dramaNotificationOn","Status"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding>
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
      </Grid>
    </>
  );
}
