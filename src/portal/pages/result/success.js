/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from 'react';
import Content from '../../components/content';
import PageHeader from '../../components/page-header';
import PageContent from '../../components/page-content';
import { Button, Card, Icon, Steps, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import { connect } from '@lugia/lugiax';
import success from '../../models/result/success';

const Step = Steps.Step;

const ContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
`;
export const BreadcrumbWrap = styled.div`
  width: 100%;
`;
const SuccessText = styled.div`
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
`;
const SuccessDesTextWrap = styled.div`
  width: 50%;
  line-height: 20px;
  min-width: 740px;
  margin: 10px auto;
  margin-bottom: 0;
  font-size: 14px;
  color: #666;
`;
const SuccessDesText = styled.p`
  line-height: 20px;
`;
const PorcessContentWrap = styled.div`
  width: 940px;
  margin: 0 auto;
`;
const CardContentContainer = styled.div`
  width: 100%;
  height: 115px;
  display: inline-block;
  text-align: left;
  margin-top: 17px;
  padding-left: 140px;
`;
const DesContainer = styled.table`
  width: 100%;
  table-layout: fixed;
  margin-bottom: 24px;
`;
const TitleContainer = styled.tr`
  display: table-row;
  border-color: inherit;
`;
const Title = styled.td`
  display: inline-block;
  text-align: left;
  width: 200px;
  &.time {
    width: 300px;
  }
  & > span {
    font-weight: 600;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  padding-top: 20px;
  text-align: center;
`;

const cardThemeConfig = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: '100%',
        height: 237,
        margin: {
          top: 24,
        },
        padding: {
          left: 0,
        },
        border: 'none',
        boxShadow: 'none',
        background: {
          color: '#F8F8F8',
        },
      },
    },
    CardTitle: {
      normal: {
        height: 25,
        font: {
          size: 18,
          weight: 600,
        },
        margin: {
          top: 4,
          left: 130,
        },
      },
    },
  },
  [Widget.Steps]: {
    StepOutContainer: {
      normal: {
        width: 200,
        margin: {
          left: 30,
        },
      },
    },
  },
  [Widget.Step]: {
    StepOutContainer: {
      normal: {
        width: 210,
      },
    },
    StepDescription: {
      normal: {
        width: 200,
        fontSize: 12,
        color: '#666',
        margin: {
          top: 13,
        },
      },
    },
  },
};
const buttonView = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: 80,
        height: 32,
        margin: {
          right: 20,
        },
      },
    },
  },
};

const iconTheme = {
  [Widget.Icon]: {
    Icon: {
      normal: {
        fontSize: 88,
        color: '#56c22d',
        margin: {
          top: 74,
        },
      },
    },
  },
};
const routes = [
  {
    path: '/dashboard/analyse',
    title: '??????',
  },
  {
    title: '?????????',
  },
  {
    title: '?????????',
  },
];

class ResultSuccess extends Component {
  render() {
    return (
      <Content>
        {/*??????*/}
        <PageHeader routes={routes} />
        {/*????????????*/}
        <PageContent>
          {/*????????????*/}
          <ContentContainer>
            <Theme config={iconTheme}>
              <Icon iconClass={'lugia-icon-reminder_check_circle'} />
              <SuccessText>{'????????????'}</SuccessText>
              <SuccessDesTextWrap>
                <SuccessDesText>
                  ?????????????????????????????????????????????????????????????????? ????????????????????????????????? Message
                  ???????????????????????????
                </SuccessDesText>
                <SuccessDesText>
                  ????????????????????????????????????????????????????????????????????????
                  ?????????????????????????????????????????????????????????????????????????????????
                </SuccessDesText>
              </SuccessDesTextWrap>
            </Theme>
          </ContentContainer>
          {/*????????????*/}
          <PorcessContentWrap>
            <Theme config={cardThemeConfig}>
              <Card
                title={'????????????'}
                content={
                  <CardContentContainer>
                    <DesContainer>
                      <TitleContainer>
                        <Title>
                          <span>{'??????Id: '}</span>
                          {'12323'}
                        </Title>
                        <Title>
                          <span>{'?????????:  '}</span>
                          {'?????????'}
                        </Title>
                        <Title className={'time'}>
                          <span>{'????????????:  '}</span>
                          {'2018-12-12 ~ 2018-12-30'}
                        </Title>
                      </TitleContainer>
                    </DesContainer>
                    <Steps orientation="horizontal" size={'normal'} desAlign={'center'}>
                      <Step
                        title="????????????"
                        stepStatus="process"
                        description={[<div>{'?????????'}</div>, <div>{'2016-12-12 12:32'}</div>]}
                      />
                      <Step
                        description={
                          <desContainer>
                            <div>{'?????????'}</div>
                          </desContainer>
                        }
                        title="????????????"
                        stepStatus="next"
                      />
                      <Step title="????????????" stepStatus="wait" />
                      <Step title="??????" stepStatus="wait" />
                    </Steps>
                  </CardContentContainer>
                }
              />
            </Theme>
          </PorcessContentWrap>
          {/*??????*/}
          <FooterContainer>
            <Theme config={buttonView}>
              <Button type={'primary'} shape={'round'} onClick={this.props.goBack}>
                {'????????????'}
              </Button>
              <Button shape={'round'} onClick={this.props.goDetails}>
                {'????????????'}
              </Button>
              <Button shape={'round'} onClick={this.props.doPrint}>
                {'??????'}
              </Button>
            </Theme>
          </FooterContainer>
        </PageContent>
      </Content>
    );
  }
}

const SuccessPage = connect(success, mutations => {
  return {
    goBack: mutations.goBack,
    goDetails: mutations.goDetails,
    doPrint: mutations.doPrint,
  };
})(ResultSuccess);

export default () => {
  return <SuccessPage />;
};
