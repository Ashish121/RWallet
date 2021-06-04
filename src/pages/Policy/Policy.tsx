import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonButton,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';
import { CloseIcon } from '../../assets/Icons';
import { ButtonConmponent } from '../../components';
import { requestForPrivacyAndPolicy } from '../../redux/actions/';
import './Policy.scss';

const Policy: React.FC<{ closeHandler: Function }> = ({ closeHandler }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPrivacy, setShowPrivacy] = useState(true);
  const [policyData, setPolicyData] = useState([]);
  const [refundPolicy, setRefundPolicy] = useState(true);
  const [subType, setSubType] = useState(false);
  const [defaultColor, setDefaultColor] = useState(true);

  useEffect(() => {
    dispatch(requestForPrivacyAndPolicy(showImageSliderList));
  }, []);

  function showImageSliderList(res: any) {
    const policy = res.data.data;
    setPolicyData(policy);
  }

  function closeMenu(status: any) {
    if (status) {
      history.replace('/tabs/');
    }
  }

  const termAndCondition = () => {
    setDefaultColor(false);
    setShowPrivacy(false);
    setSubType(false);
  };

  const privacyAndPolicy = () => {
    setDefaultColor(false);
    setShowPrivacy(true);
  };

  const refundPolicyButton = () => {
    setRefundPolicy(true);
    setSubType(false);
  };

  const returnPolicyButton = () => {
    setRefundPolicy(false);
    setSubType(false);
  };

  const confidentialityButton = () => {
    setSubType(true);
  };

  return (
    <>
      <IonPage class="policy_wrapper">
        <div style={{ width: '100%', textAlign: 'end', background: 'white' }}>
          <IonButton
            class="close-btn"
            // onClick={() => closeHandler}
            className="close-icons"
            style={{
              background: 'transparent',
              outline: 'none',
              border: 'none',
            }}
            onClick={closeMenu}
          >
            <CloseIcon onClick={() => closeHandler} />
          </IonButton>
        </div>
        <div>
          <IonSegment
          //onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton
              value="friends"
              onClick={privacyAndPolicy}
              style={{ color: defaultColor ? 'white' : '' }}
            >
              <IonLabel>Privacy policy</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="enemies" onClick={termAndCondition}>
              <IonLabel>Terms and Conditions</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        <IonContent>
          <div className="policy-container">
            {showPrivacy && policyData.length > 0 ? (
              <>
                <div className="subnav-button">
                  <ButtonConmponent
                    buttonLabel="policy.refund"
                    clickHandler={refundPolicyButton}
                  />
                  <ButtonConmponent
                    buttonLabel="policy.return"
                    clickHandler={returnPolicyButton}
                  />
                </div>
                <ButtonConmponent
                  buttonLabel="policy.confidential"
                  clickHandler={confidentialityButton}
                />

                {subType ? (
                  <>
                    {' '}
                    {policyData.map((element: any) => {
                      return (
                        <>
                          {element.class ===
                          'Privacy policy and Confidentiality' ? (
                              <>
                                <div className="page-title">{element.class}</div>
                                <p className="page-paragraph">
                                  {element.description}
                                </p>
                              </>
                            ) : (
                              <></>
                            )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {refundPolicy ? (
                      <>
                        {policyData.map((element: any) => {
                          return (
                            <>
                              {element.class === 'Refund Policy' ? (
                                <>
                                  <div className="page-title">
                                    {element.class}
                                  </div>
                                  <p className="page-paragraph">
                                    {element.description}
                                  </p>
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        {policyData.map((element: any) => {
                          return (
                            <>
                              {element.class === 'Return & Exchange Policy' ? (
                                <>
                                  <div className="page-title">
                                    {element.class}
                                  </div>
                                  <p className="page-paragraph">
                                    {element.description}
                                  </p>
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {policyData.map((element: any) => {
                  return (
                    <>
                      {element.class === 'Terms and Conditions' ? (
                        <>
                          <div className="page-title">{element.class}</div>
                          <p className="page-paragraph">
                            {element.description}
                          </p>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
              </>
            )}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { Policy };
