/**
 *
 * create by liangguodong
 *
 * @flow
 */
import React, { Component } from 'react';
import Content from '../../components/content';
import PageHeader from '../../components/page-header';
import PageContent from '../../components/page-content';

import {
  Button,
  DatePicker,
  Divider,
  Icon,
  Input,
  NumberInput,
  Select,
  Steps,
  Theme,
  TimePicker,
} from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import { connect } from '@lugia/lugiax';
import stepForm from '../../models/form/step';
import { getBorderRadius } from '@lugia/theme-utils';

const { RangePicker } = DatePicker;

const ItemContainer = styled.div`
  position: relative;
  zoom: 1;
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  padding: 12px 0;
`;

const InlineContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;
const InlineBlockContainer = styled.div`
  display: inline-block;
`;
const BlockContainer = styled.div`
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 0;
`;
const ThirdBlockContainer = styled(BlockContainer)`
  text-align: center;
`;
const OperationContainer = styled.div`
  display: inline-block;
  width: 100%;
  text-align: left;
  margin: 15px 0;
`;

const StepContainer = styled(ItemContainer)`
  margin: 16px 0;
  text-align: center;
  width: 100%;
`;
const SecondStepContainer = styled(ItemContainer)`
  text-align: center;
  margin: 16px 0;
  width: 600px;
`;
const ThirdStepsContentContainer = styled(SecondStepContainer)`
  background: #fafafa;
  border-radius: 4px;
`;
const MemoContainer = styled(ItemContainer)`
  width: 100%;
`;

const ItemInnerContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20%;
  margin-right: 8px;
  vertical-align: bottom;
  text-align: right;
`;
const RightInputContainer = styled(ItemInnerContainer)`
  width: 23%;
`;

const MemoInnerContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 10%;
  text-align: right;
  margin-right: 10px;
  vertical-align: top;
`;

const ItemInputContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 60%;
  vertical-align: top;
`;
const RightItemInputContainer = styled(ItemInputContainer)`
  width: 73%;
  text-align: left;
`;
const MomeInputContainer = styled(ItemInputContainer)`
  width: 88%;
`;
const OperationLeftContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 12%;
  vertical-align: top;
`;
const StepsSecondInputContainer = styled(ItemInputContainer)`
  width: 40%;
`;
const Warpper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
`;
const TitleText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const StepsSecondTitleText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  width: 80px;
  font-size: 14px;
  margin-right: 10px;
`;
const StepsSecondTitleRightText = styled(StepsSecondTitleText)`
  text-align: right;
`;
const StepsSecondText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #666;
`;
const MemoText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const MustStar = styled(TitleText)`
  color: red;
  font-size: 20px;
  vertical-align: text-top;
`;
const PercentText = styled.span`
  margin-left: 10px;
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  width: 10px;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
`;

const SuccessText = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;

const routes = [
  {
    path: '/dashboard/analyse',
    title: '??????',
  },
  {
    title: '?????????',
  },
  {
    path: '/pages/form/step',
    title: '????????????',
  },
];

class StepForm extends Component {
  render() {
    const steps = [
      {
        title: '????????????',
        currentStepNumber: 1,
      },
      {
        title: '????????????',
      },
      {
        title: '??????',
      },
    ];
    const stepTheme = {
      [Widget.Steps]: {
        StepsOutContainer: {
          normal: {
            width: 600,
          },
        },
      },
    };
    const getSteps = currentStepNumber => () => {
      return (
        <StepContainer>
          <Theme config={stepTheme}>
            <Steps data={steps} currentStepNumber={currentStepNumber} desAlign={'center'} />
          </Theme>
        </StepContainer>
      );
    };
    const getFirstStepsView = currentStepNumber => {
      if (currentStepNumber !== 1) {
        return null;
      }
      return (
        <div>
          <Theme config={commonView}>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'????????????:'}</TitleText>
                </ItemInnerContainer>
                <ItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'????????????'}
                    onChange={this.props.typeChange}
                  />
                </ItemInputContainer>
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'?????????:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'??????????????????'}
                    onChange={this.props.custodianChange}
                  />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'????????????:'}</TitleText>
                </ItemInnerContainer>
                <ItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'XXX????????????'}
                    onChange={this.props.belongChange}
                  />
                </ItemInputContainer>
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <TitleText>{'??????:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <Input placeholder={'******'} onChange={this.props.dealerChange} />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'????????????:'}</TitleText>
                </ItemInnerContainer>
                <ItemInputContainer>
                  <NumberInput placeholder={10} onChange={this.props.deductionChange} />
                  {/*<PercentText>{"%"}</PercentText>*/}
                </ItemInputContainer>
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'??????:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'????????????'}
                    onChange={this.props.invoiceChange}
                  />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
          </Theme>
          <Theme config={rangePicker}>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'??????????????????:'}</TitleText>
                </ItemInnerContainer>
                <RangePicker format={'YYYY-MM-DD'} onChange={this.props.periodChange} />
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'????????????:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <TimePicker placeholder={'????????????'} onChange={this.props.payTimeChange} />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'??????????????????:'}</TitleText>
                </ItemInnerContainer>
                <TimePicker placeholder={'????????????'} onChange={this.props.reminderTimeChange} />
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'????????????'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <TimePicker placeholder={'????????????'} onChange={this.props.positionTimeChange} />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <MemoContainer>
              <MemoInnerContainer>
                <MemoText>{'??????:'}</MemoText>
              </MemoInnerContainer>
              <MomeInputContainer>
                <Theme config={inputMemoView}>
                  <Input onChange={this.props.memoChange} />
                </Theme>
              </MomeInputContainer>
            </MemoContainer>
          </Theme>

          {getFirstStepsOperation}
        </div>
      );
    };
    const verticalDivider = {
      [Widget.Divider]: {
        VerticalDivider: {
          normal: {
            width: 2,
            height: 170,
            background: {
              color: '#e8e8e8',
            },
          },
        },
      },
    };
    const hDivider = {
      [Widget.Divider]: {
        HorizontalDivider: {
          normal: {
            background: {
              color: '#e8e8e8',
            },
            margin: {
              top: 20,
              bottom: 20,
            },
          },
        },
      },
    };
    const getSecondStepsView = currentStepNumber => {
      if (currentStepNumber !== 2) {
        return null;
      }
      return (
        <StepContainer>
          <SecondStepContainer>
            <Theme config={commonView}>
              <InlineContainer>
                <BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'????????????'}</StepsSecondTitleText>
                    <StepsSecondText>{'????????????'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'?????????'}</StepsSecondTitleText>
                    <StepsSecondText>{'??????????????????'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'????????????'}</StepsSecondTitleText>
                    <StepsSecondText>{'????????????????????????'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'????????????'}</StepsSecondTitleText>
                    <StepsSecondText>{'10%'}</StepsSecondText>
                  </BlockContainer>
                </BlockContainer>
                <Theme config={verticalDivider}>
                  <Divider type={'vertical'}> </Divider>
                </Theme>
                <BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'??????'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'????????????'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'??????'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'????????????'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'????????????'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'2018???10???21???'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'????????????'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'2018???10???21???'}</StepsSecondText>
                  </BlockContainer>
                </BlockContainer>
              </InlineContainer>
            </Theme>
            <Theme config={hDivider}>
              <Divider> </Divider>
            </Theme>
            <InlineContainer>
              <TitleText>{'????????????'}</TitleText>
              <StepsSecondInputContainer>
                <Theme config={inputTicketView}>
                  <Input
                    placeholder={'???????????????????????????????????????'}
                    onChange={this.props.ticketChange}
                  />
                </Theme>
              </StepsSecondInputContainer>
            </InlineContainer>
            {getSecondStepsOperation}
          </SecondStepContainer>
        </StepContainer>
      );
    };

    const thirdStepsiconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 56,
            color: '#56c22d',
          },
        },
      },
    };
    const getThirdStepsView = currentStepNumber => {
      if (currentStepNumber !== 3) {
        return null;
      }
      return (
        <div>
          <ContentContainer>
            <Theme config={thirdStepsiconTheme}>
              <Icon iconClass={'lugia-icon-reminder_check_circle'} />
            </Theme>
            <SuccessText>{'????????????'}</SuccessText>
          </ContentContainer>
          <StepContainer>
            <ThirdStepsContentContainer>
              <ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'?????????'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'??????????????????'}</StepsSecondText>
                </ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'????????????'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'????????????????????????'}</StepsSecondText>
                </ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'????????????'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'2018???10???21???'}</StepsSecondText>
                </ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'????????????'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'2018???10???21???'}</StepsSecondText>
                </ThirdBlockContainer>
              </ThirdBlockContainer>
            </ThirdStepsContentContainer>
          </StepContainer>
          {getThirdStepsOperation}
        </div>
      );
    };
    const saveButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            borderRadius: getBorderRadius(16),
            margin: {
              right: 20,
            },
          },
        },
      },
    };
    const getFirstStepsOperation = (
      <ItemContainer>
        <ItemInnerContainer />
        <ItemInputContainer>
          <Theme config={saveButtonTheme}>
            <Button onClick={this.props.doNextStep} type={'primary'}>
              {'?????????'}
            </Button>
            <Button onClick={this.props.reset}>??????</Button>
          </Theme>
        </ItemInputContainer>
      </ItemContainer>
    );
    const getSecondStepsOperation = (
      <OperationContainer>
        <OperationLeftContainer />
        <InlineBlockContainer>
          <Theme config={saveButtonTheme}>
            <Button onClick={this.props.doNextStep} type={'primary'}>
              {'?????????'}
            </Button>
            <Button onClick={this.props.doPreStep}>{'?????????'}</Button>
          </Theme>
        </InlineBlockContainer>
      </OperationContainer>
    );
    const getThirdStepsOperation = (
      <StepContainer>
        <ItemInputContainer>
          <Theme config={saveButtonTheme}>
            <Button type={'primary'}>??????</Button>
            <Button>????????????</Button>
          </Theme>
        </ItemInputContainer>
      </StepContainer>
    );
    const { currentStepNumber = 1 } = this.props;
    const commonView = {
      [Widget.NumberInput]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
      [Widget.Input]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
      [Widget.Select]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
    };
    const inputMemoView = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: '100%',
            height: 100,
          },
        },
      },
    };
    const inputTicketView = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: 400,
          },
        },
      },
    };
    const rangePicker = {
      [Widget.RangePicker]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
      [Widget.TimePicker]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
    };
    const selectData = [
      { value: 'xxx', label: 'xxxxx' },
      { value: 'xxx', label: 'xxxxx' },
      { value: 'xxx', label: 'xxxxx' },
      { value: 'xxx', label: 'xxxxx' },
      { value: 'xxx', label: 'xxxxx' },
      { value: 'xxx', label: 'xxxxx' },
    ];
    return (
      <Content>
        <PageHeader
          routes={routes}
          title={'????????????'}
          desc={'??????????????????????????????????????????????????????????????????????????????????????????'}
        />
        <PageContent>
          {getSteps(currentStepNumber)()}
          {getFirstStepsView(currentStepNumber)}
          {getSecondStepsView(currentStepNumber)}
          {getThirdStepsView(currentStepNumber)}
        </PageContent>
      </Content>
    );
  }
}

const StepFormPage = connect(
  stepForm,
  state => {
    const currentStepNumber = state.get('currentStepNumber');
    return {
      currentStepNumber,
    };
  },
  mutations => {
    return {
      ticketChange: mutations.ticketChange,
      memoChange: mutations.memoChange,

      typeChange: mutations.typeChange,
      belongChange: mutations.belongChange,
      deductionChange: mutations.deductionChange,
      periodChange: mutations.periodChange,
      reminderTimeChange: mutations.reminderTimeChange,
      custodianChange: mutations.custodianChange,
      dealerChange: mutations.dealerChange,
      invoiceChange: mutations.invoiceChange,
      payTimeChange: mutations.payTimeChange,
      positionTimeChange: mutations.positionTimeChange,

      doNextStep: mutations.doNextStep,
      doPreStep: mutations.doPreStep,
      reset: mutations.reset,
    };
  }
)(StepForm);

export default () => {
  return <StepFormPage />;
};
