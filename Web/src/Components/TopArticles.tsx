import { Box, Button, Divider, styled } from "@material-ui/core";
import {
  ForumOutlined,
  ThumbUpAltRounded,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React, { ReactElement, useState } from "react";
import {
  BoldText,
  FlexColumnBox,
  FlexRowBox,
  LightText,
} from "../styles/Styles";

const PeriodButton = styled(Button)({
  minWidth: 0,
  padding: "4px",
  textTransform: "none",
  "&:not(:last-child)": {
    marginRight: "4px",
  },
});

interface Props {}

type Period = {
  week: "week";
  month: "month";
  "3months": "3months";
};

function TopArticles({}: Props): ReactElement {
  const [period, setPeriod] = useState("week");
  console.log(period);
  return (
    <>
      <FlexRowBox
        padding="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <BoldText variant="h4" fontSize="20px">
          Top Articles
        </BoldText>
        <FlexRowBox>
          <PeriodButton
            onClick={() => {
              setPeriod("week");
            }}
            color={period === "week" ? "primary" : "default"}
          >
            1w
          </PeriodButton>
          <PeriodButton
            onClick={() => {
              setPeriod("month");
            }}
            color={period === "month" ? "primary" : "default"}
          >
            1m
          </PeriodButton>
          <PeriodButton
            onClick={() => {
              setPeriod("3mons");
            }}
            color={period === "3mons" ? "primary" : "default"}
          >
            3m
          </PeriodButton>
          <PeriodButton
            onClick={() => {
              setPeriod("6mons");
            }}
            color={period === "6mons" ? "primary" : "default"}
          >
            6m
          </PeriodButton>
        </FlexRowBox>
      </FlexRowBox>
      <Divider orientation="horizontal" />
      <FlexColumnBox padding="20px">
        <BoldText variant="caption" fontSize="16px">
          Title
        </BoldText>
        <FlexRowBox fontSize="14px" alignItems="center">
          <LightText fontSize="14px" margin="0 20px 0 0">
            username
          </LightText>
          <FlexRowBox fontSize="14px" alignItems="center" marginRight="20px">
            {/* like button and count */}
            <ThumbUpOutlined fontSize="small" />
            <LightText fontSize="14px">124</LightText>
          </FlexRowBox>
          <FlexRowBox fontSize="14px" alignItems="center">
            {/* comment button and count */}
            <ForumOutlined fontSize="small" />
            <LightText fontSize="14px">127</LightText>
          </FlexRowBox>
        </FlexRowBox>
      </FlexColumnBox>
    </>
  );
}

export default TopArticles;
