/**
 *
 * create by liangguodong
 *
 * @flow
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  Icon,
  Input,
  Radio,
  Select,
  Switch,
  Tabs,
  Theme,
  Upload,
} from '@lugia/lugia-web';
import { connect } from '@lugia/lugiax';
import setting from '../../models/personal/setting';
import { getBorder, getBorderRadius } from '@lugia/theme-utils';

const RadioGroup = Radio.Group;

const TabsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 14px;
  & > div {
    > div {
      > div {
        padding: 0;
      }
    }
  }
`;
const Container = styled.div`
  width: 100%;
  min-width: 700px;
  height: 1500px;
  display: inline-flex;
  padding: 20px 30px 0;
  border-left: 10px solid #f5f5f9;
`;
const InnerInputContainer = styled.div`
  min-width: 455px;
  display: flex;
  flex-direction: column;
`;
const InnerContainer = styled.div`
  width: 260px;
  padding-top: 25px;
`;

const RightContainer = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;
const SafeItemContainer = styled.div`
  align-items: center;
  padding: 12px 0;
  height: 60px;
  width: 100%;
`;
const ItemInnerContainer = styled.div`
  float: left;
  margin-right: 20px;
`;
const OperationText = styled.div`
  width: 38px;
  height: 20px;
  line-height: 20px;
  color: #4d63ff;
`;

const SafeTitleText = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  flex: none;
  width: 64px;
  display: inline-block;
`;
const VersionTitleText = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  display: inline-block;
`;
const SelectContainer = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;
const QuickLoginWrapper = styled.div`
  width: 60%;
  font-size: 36px;
  display: inline-flex;
  flex-wrap: wrap;
`;
const IconWrap = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #86db46;
`;
const QQIconWrap = styled(IconWrap)`
  background: #51bcff;
`;
const TwitterIconWrap = styled(IconWrap)`
  background: #29a3ef;
`;
const FacebookIconWrap = styled(IconWrap)`
  background: #4469b0;
`;
const WeiboIconWrap = styled(IconWrap)`
  background: #e6172d;
`;
const HeadWrap = styled.div`
  height: 25px;
  margin-bottom: 26px;
`;
const HeadWrapMessage = styled(HeadWrap)`
  margin: 0;
`;
const ItemWrap = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  & > label {
    width: 42px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
    float: left;
  }
`;
const AddtionWrap = styled.div`
  margin-top: 17px;
  padding-left: 42px;
  & > button:nth-child(1) {
    margin-right: 20px;
    width: 110px;
  }
  & > button:nth-child(2) {
    width: 76px;
  }
`;
const SecurityItemWrap = styled.div`
  margin-bottom: 20px;
  min-width: 870px;
  box-sizing: border-box;
  & > label {
    width: 64px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
    float: left;
  }
`;
const FieldContentWrap = styled.div`
  width: 800px;
  padding-top: 5px;
  float: left;
`;
const FieldItemWrap = styled.div`
  height: 40px;
  margin-bottom: 10px;
`;
const CheckboxInnerContainer = styled.div`
  float: left;
  width: 30px;
`;
const ItemContentWrap = styled.div`
  float: left;
`;
const SafeInnerTitleText = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #333;
`;
const SafeDescText = styled.div`
  line-height: 20px;
  font-size: 12px;
  color: #999;
`;
const MessageInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ItemContainer = styled.div`
  align-items: center;
  height: 80px;
  padding: 18px 5px 15px 0;
  position: relative;
`;
const MessageItemTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  margin-bottom: 5px;
`;
const MessageItemContent = styled.div`
  font-size: 12px;
  color: #999;
  height: 25px;
  line-height: 17px;
`;
const SwitchWarp = styled.div`
  margin-right: 20px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -10px;
`;

const uploadTheme = {
  [Widget.Upload]: {
    UploadDefaultType: {
      normal: {
        border: getBorder({ width: 1, style: 'solid', color: '#ccc' }),
        borderRadius: getBorderRadius(4),
      },
    },
  },
};

function changeBrowserWidth() {
  return document.documentElement.clientWidth;
}
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserWidth: changeBrowserWidth(),
    };
  }

  render() {
    const {
      onEmailChange,
      onNameChange,
      onPersonDescChange,
      onCountryChange,
      onProvinceChange,
      onCityChange,
    } = this.props;
    const msgItems = [
      {
        title: '????????????',
        desc: '????????????????????????????????????????????????????????????',
        hasSwitch: true,
      },
      {
        title: '??????????????????????????????',
        desc: '?????????????????????????????????????????? ',
        hasSwitch: true,
      },
      {
        title: '??????????????????????????????',
        desc: '??????????????????????????????????????????',
        hasSwitch: true,
      },
    ];

    const iconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 40,
            padding: 10,
          },
        },
      },
    };
    const avatarConfig = {
      [Widget.Avatar]: {
        SrcAvatar: { normal: { width: 150, height: 150 } },
      },
      [Widget.Upload]: {
        UploadLiType: {
          normal: {
            background: 'red',
          },
        },
      },
    };

    const getItem = data => () => {
      return (
        <MessageInnerContainer>
          <HeadWrapMessage>
            <h2>????????????</h2>
          </HeadWrapMessage>
          {data.map(item => {
            const { title, desc, operationText, icon, hasSwitch } = item;
            const leftIcon = icon ? (
              <Theme config={iconTheme}>
                <Icon iconClass={icon} />
              </Theme>
            ) : null;
            const Operation = operationText ? (
              <OperationText> {operationText}</OperationText>
            ) : hasSwitch ? (
              <Switch defaultValue={true} />
            ) : null;
            return [
              <ItemContainer>
                {leftIcon}
                <ItemInnerContainer>
                  <MessageItemTitle>{title}</MessageItemTitle>
                  <MessageItemContent>{desc}</MessageItemContent>
                </ItemInnerContainer>
                <SwitchWarp>{Operation}</SwitchWarp>
              </ItemContainer>,
              <Divider />,
            ];
          })}
        </MessageInnerContainer>
      );
    };
    const getInputItem = data => () => {
      return data.map(item => {
        const { inputPlaceholder, inputConfig, onChange } = item;
        return [
          <ItemInnerContainer>
            <Theme config={inputConfig}>
              <Input placeholder={inputPlaceholder} onChange={onChange} />
            </Theme>
          </ItemInnerContainer>,
        ];
      });
    };
    const getSelectItem = data => () => {
      return data.map(item => {
        const { selectData, selectDefaultValue, selectConfig } = item;
        return [
          <ItemInnerContainer>
            <Theme config={selectConfig}>
              <SelectContainer>
                <Select
                  createPortal
                  data={selectData}
                  displayField={'label'}
                  defaultValue={selectDefaultValue}
                />
              </SelectContainer>
            </Theme>
          </ItemInnerContainer>,
        ];
      });
    };
    const nameData = [
      {
        inputPlaceholder: 'Asyllabear',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onNameChange,
      },
    ];
    const emailData = [
      {
        inputPlaceholder: 'Asyllabear@gmail.com',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onEmailChange,
      },
    ];
    const languelData = [
      {
        inputPlaceholder: '??????',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onEmailChange,
      },
    ];
    const twitterData = [
      {
        inputPlaceholder: 'Jason John',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onEmailChange,
      },
    ];
    const desData = [
      {
        inputPlaceholder: '??????????????????????????????????????????????????????',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
                height: 80,
              },
            },
            Input: {
              normal: {
                padding: {
                  top: 0,
                  right: 16,
                  bottom: 50,
                  left: 10,
                },
              },
            },
          },
        },
        onChange: onPersonDescChange,
      },
    ];
    const countryData = [
      {
        selectDefaultValue: '??????',
        selectData: [
          { value: '??????', label: '??????' },
          { value: '??????', label: '??????' },
        ],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 100,
                },
              },
            },
          },
        },
        onChange: onCountryChange,
      },
    ];
    const radioView = {
      [Widget.Radio]: {
        Container: {
          normal: {
            margin: {
              right: 30,
            },
          },
        },
      },
    };
    const provinceData = [
      {
        title: '??????:',
        selectDefaultValue: '??????',
        selectData: [{ value: '?????????', label: '?????????' }],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 100,
                },
              },
            },
          },
        },
        onChange: onProvinceChange,
      },
    ];
    const cityData = [
      {
        selectDefaultValue: '??????',
        hasTitle: false,
        selectData: [
          { value: '?????????', label: '?????????' },
          { value: '?????????', label: '?????????' },
        ],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 150,
                },
              },
            },
          },
        },
        onChange: onCityChange,
      },
    ];
    const { browserWidth } = this.state;

    const settingContent = [
      <Container>
        <InnerInputContainer>
          <HeadWrap>
            <h2>??????????????????</h2>
          </HeadWrap>
          <ItemWrap>
            <label>??????:</label>
            {getInputItem(nameData)()}
          </ItemWrap>
          <ItemWrap>
            <label>??????:</label>
            {getInputItem(emailData)()}
          </ItemWrap>
          <ItemWrap>
            <label>??????:</label>
            {getInputItem(languelData)()}
          </ItemWrap>
          <ItemWrap>
            <label>??????:</label>
            {getInputItem(twitterData)()}
          </ItemWrap>
          <ItemWrap>
            <label>??????:</label>
            {getInputItem(desData)()}
          </ItemWrap>
          <ItemWrap>
            <label>??????:</label>
            <Theme config={radioView}>
              <RadioGroup defaultValue="2">
                <Radio value="1">???</Radio>
                <Radio value="2">???</Radio>
                <Radio value="3">??????</Radio>
              </RadioGroup>
            </Theme>
          </ItemWrap>
          <ItemWrap>
            <label>??????:</label>
            {getSelectItem(countryData)()}
            {getSelectItem(provinceData)()}
            {getSelectItem(cityData)()}
          </ItemWrap>
          <AddtionWrap>
            <Button onClick={this.props.doUpdateUserInfo} type={'primary'} shape={'round'}>
              ????????????
            </Button>
            <Button type={'default'} shape={'round'}>
              ??????
            </Button>
          </AddtionWrap>
        </InnerInputContainer>
        <InnerContainer>
          <Theme config={avatarConfig}>
            <RightContainer>
              <Avatar
                type={'img'}
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
              />
            </RightContainer>
            <RightContainer>
              <Theme config={uploadTheme}>
                <Upload
                  areaType={'button'}
                  icon={'lugia-icon-financial_download'}
                  onClick={this.props.doUpdateAvatar}
                ></Upload>
              </Theme>
            </RightContainer>
          </Theme>
        </InnerContainer>
      </Container>,
    ];
    const theIconTheme = () => {
      const theColor = '#fff';
      return {
        [Widget.Icon]: {
          Icon: {
            normal: {
              fontSize: 18,
              color: theColor,
              background: 'blue',
            },
          },
        },
      };
    };
    const saveButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            borderRadius: getBorderRadius(16),
            margin: {
              right: 20,
            },
            padding: {
              left: 27,
              right: 27,
            },
          },
        },
      },
    };
    const feedbackButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            height: 32,
            width: 90,
            font: {
              size: 14,
            },
            margin: {
              left: 20,
            },
          },
        },
        ButtonText: {
          normal: {
            color: '#333',
          },
        },
      },
    };
    const getSafeSetting = (
      <InnerInputContainer>
        <HeadWrap>
          <h2>????????????</h2>
        </HeadWrap>
        <SecurityItemWrap>
          <label>??????:</label>
          <QuickLoginWrapper>
            <IconWrap>
              <Theme config={theIconTheme('wechat')}>
                <Icon iconClass="lugia-icon-logo_wechat" />
              </Theme>
            </IconWrap>
            <WeiboIconWrap>
              <Theme config={theIconTheme('weibo')}>
                <Icon iconClass="lugia-icon-logo_weibo" />
              </Theme>
            </WeiboIconWrap>
            <FacebookIconWrap>
              <Theme config={theIconTheme('facebook')}>
                <Icon iconClass="lugia-icon-logo_facebook" />
              </Theme>
            </FacebookIconWrap>
            <TwitterIconWrap>
              <Theme config={theIconTheme('twitter')}>
                <Icon iconClass="lugia-icon-logo_twitter" />
              </Theme>
            </TwitterIconWrap>
            <QQIconWrap>
              <Theme config={theIconTheme('QQ')}>
                <Icon iconClass="lugia-icon-logo_QQ" />
              </Theme>
            </QQIconWrap>
          </QuickLoginWrapper>
        </SecurityItemWrap>
        <SecurityItemWrap>
          <label>??????:</label>
          <Input onChange={this.props.pathChange} />
          <Input onChange={this.props.pathChange} />
        </SecurityItemWrap>
        <SecurityItemWrap>
          <label>??????:</label>
          <FieldContentWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>Api ????????????????????????????????????API</SafeInnerTitleText>
                <SafeDescText>???????????????????????????lugia pro,????????????????????????????????????/???</SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>Read-user ?????????????????????????????????????????????</SafeInnerTitleText>
                <SafeDescText>
                  ???????????????????????????????????????????????????,???????????????,???????????????????????????
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>
                  ???????????????????????????????????????API?????????????????????????????????????????????????????????
                </SafeInnerTitleText>
                <SafeDescText>
                  ??????Sudo????????????????????????????????????????????????API?????????????????????????????????
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>read_repository ????????????</SafeInnerTitleText>
                <SafeDescText>???????????????</SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>openid ??????OpenID Connect ??????????????????</SafeInnerTitleText>
                <SafeDescText>
                  ??????Lugia
                  pro?????????????????????????????????????????????????????????????????????????????????????????????????????????
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
          </FieldContentWrap>
        </SecurityItemWrap>

        <SecurityItemWrap>
          <SafeTitleText>??????pro :</SafeTitleText>
          <VersionTitleText>????????????</VersionTitleText>
          <VersionTitleText>1.5.9 </VersionTitleText>
          <Theme config={feedbackButtonTheme}>
            <Button>????????????</Button>
          </Theme>
        </SecurityItemWrap>
        <SafeItemContainer>
          <SafeTitleText />
          <QuickLoginWrapper>
            <Theme config={saveButtonTheme}>
              <Button type="primary">????????????</Button>
              <Button>??????</Button>
            </Theme>
          </QuickLoginWrapper>
        </SafeItemContainer>
      </InnerInputContainer>
    );
    const defaultData = [
      {
        title: '????????????',
        content: settingContent,
      },
      {
        title: '????????????',
        content: <Container>{getSafeSetting}</Container>,
      },
      {
        title: '????????????',
        content: <Container> {getItem(msgItems)()}</Container>,
      },
    ];
    const config = {
      [Widget.Tabs]: {
        WindowContainer: {
          normal: {
            padding: {
              top: 0,
            },
          },
        },
        ContentBlock: {
          normal: {
            width: '100%',
            height: 1500,
            padding: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
          },
        },
        TabHeader: {
          DefaultTabPan: {
            normal: {
              width: 150,
              height: 58,
              margin: {
                top: 4,
                right: 20,
                bottom: 8,
              },
            },
          },
        },
      },
    };
    const position = browserWidth > 800 ? 'left' : 'top';
    return (
      <Theme config={config}>
        <TabsContainer>
          <Tabs tabType={'line'} tabPosition={position} data={defaultData} />
        </TabsContainer>
      </Theme>
    );
  }
  componentDidMount() {
    window.onresize = () => {
      const browserWidth = changeBrowserWidth();
      setTimeout(() => {
        this.setState({ browserWidth });
      }, 0);
    };
  }
}

const SettingPage = connect(
  setting,
  state => {
    return {};
  },
  mutations => {
    return {
      onEmailChange: mutations.onEmailChange,
      onNameChange: mutations.onNameChange,
      onPersonDescChange: mutations.onPersonDescChange,
      onStreetChange: mutations.onStreetChange,
      onAreaCodeChange: mutations.onAreaCodeChange,
      onTelNumberChange: mutations.onTelNumberChange,
      onCountryChange: mutations.onCountryChange,
      onProvinceChange: mutations.onProvinceChange,
      onCityChange: mutations.onCityChange,
      pathChange: mutations.pathChange,
      doUpdateUserInfo: mutations.asyncDoUpdateUserInfo,
    };
  }
)(Setting);

export default () => {
  return <SettingPage />;
};
