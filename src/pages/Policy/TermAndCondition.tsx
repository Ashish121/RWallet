import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonButtons,
  IonButton,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from '@ionic/react';

import { CloseIcon } from '../../assets/Icons';
import { requestForPrivacyAndPolicy } from '../../redux/actions';
import './Policy.scss';

const TermAndCondition: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPrivacy, setShowPrivacy] = useState(true);
  const [policyData, setPolicyData] = useState([]);

  useEffect(() => {
    dispatch(requestForPrivacyAndPolicy(showImageSliderList));
  }, []);

  function showImageSliderList(res: any) {
    const policy = res.data.data;
    setPolicyData(policy);
  }

  function closeMenu(status: any) {
    if (status) {
      history.replace('/tabs/home');
    }
  }

  const termAndCondition = () => {
    setShowPrivacy(false);
  };

  const privacyAndPolicy = () => {
    setShowPrivacy(true);
  };

  return (
    <>
      <IonPage>
        <div className="header-page"></div>
        <IonButtons slot="end" className="header-close-button">
          <IonButton onClick={closeMenu} className="close-icons" />
          <CloseIcon color="white" />
        </IonButtons>
        <IonTabBar slot="bottom">
          <IonTabButton
            tab="home"
            href="/policy"
            onClick={privacyAndPolicy}
            style={{ color: showPrivacy ? '#747272' : '' }}
          >
            <IonLabel>Privacy policy</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="transfer"
            href="/termAndCondition"
            onClick={termAndCondition}
          >
            <IonLabel>Terms and Conditions</IonLabel>
          </IonTabButton>
        </IonTabBar>

        <IonContent>
          <div className="policy-container">
            <>
              {policyData.map((element: any) => {
                return (
                  <>
                    {element.class === 'Terms and Conditions' ? (
                      <>
                        <div className="page-title">{element.class}</div>
                        <p className="page-paragraph">{element.description}</p>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { TermAndCondition };
