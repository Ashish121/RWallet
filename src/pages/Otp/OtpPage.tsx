import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
import 'firebase/auth';
import OtpInput from 'react-otp-input';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, LoaderComponent } from '../../components';
import { updateToast, requestForRegistration } from '../../redux/actions';

import './OtpPage.scss';

const OtpPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [otpText, setOtpText] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [otpReceived, setOtpReceived] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [contact, setContact] = useState('');
  const [loaderMessage, setLoaderMessage] = useState('');

  useEffect(() => {
    const params: any = location.state;
    setContact(params.mobileNo);
  }, []);

  const onOtpEnter = (otp: any) => {
    setOtpText(otp);
    const finalOtp = otpValue.concat(otp);
    setOtpValue(finalOtp);
  };

  function nextRoute(status: any, data: any) {
    if (status == true) {
      setShowLoading(false);
      setLoaderMessage('');
      history.replace('/mpin');
    }
    setShowLoading(false);
    history.goBack();
    dispatch(updateToast(data));
  }

  function sendOTP() {
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    FirebaseAuthentication.verifyPhoneNumber('+918892050268', 30000)
      .then((verificationId: any) => {
        setShowLoading(false);
        console.log('Received verificationId: ', verificationId);
        setOtpReceived(true);
        setVerificationId(verificationId);
      })
      .catch(function (err: any) {
        setShowLoading(false);
        console.log('phoner number verification failed', err);
        const data = {
          showToast: true,
          toastMessage: 'Couldn\'t send otp.Please try after some time',
          position: 'top',
          duration: '10000',
        };
        dispatch(updateToast(data));
      });
  }

  const handleVerifyOtp = () => {
    console.log('otp: ', otpText);
    console.log('verificationId: ', verificationId);
    setShowLoading(true);
    setLoaderMessage('Verifying...');
    FirebaseAuthentication.signInWithVerificationId(
      verificationId,
      otpText
    ).then(
      (response) => {
        const params: any = location.state;
        console.log('opt verification status: ', response);
        setLoaderMessage('Registration in progress...');
        if (params.routeName) {
          history.replace(`/${params.routeName}`);
          return;
        }
        dispatch(
          requestForRegistration(
            {
              name: params.fullName,
              gender: params.gender,
              mobileNo: params.mobileNo,
              password: params.password,
            },
            nextRoute
          )
        );
      },
      (error) => {
        setShowLoading(false);
        console.log('Error: ', error);
        const data = {
          showToast: true,
          toastMessage: 'Invalid OTP.Please enter valid otp.',
          position: 'top',
          duration: '10000',
        };
        dispatch(updateToast(data));
        setOtpText('');
      }
    );
  };
  return (
    <>
      <LoaderComponent
        showLoading={showLoading}
        loaderMessage={loaderMessage}
      />
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="otp-container">
              {!otpReceived && (
                <>
                  <div className="page-header">
                    <IonText>
                      <Translate message="otp.sendOtpHeader" />
                    </IonText>
                  </div>
                  <div className="innercontainer" style={{ marginTop: '10px' }}>
                    <IonText style={{ color: '#ffffff' }}>
                      <Translate
                        message="otp.sendOtpInfo"
                        value={{ contact }}
                      />
                    </IonText>
                  </div>
                  <div
                    className="confirm-btn-wrapper"
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <ButtonConmponent
                      buttonLabel="otp.send"
                      size="block"
                      clickHandler={sendOTP}
                    />
                  </div>
                </>
              )}
              {otpReceived && (
                <>
                  <div className="page-header">
                    <IonText>
                      <Translate message="otp.pageHeader" />
                    </IonText>
                  </div>
                  <div className="page-sub-header">
                    <div className="innercontainer">
                      <IonText>
                        <Translate
                          message="otp.pageSubHeader"
                          value={{ contact }}
                        />
                      </IonText>
                    </div>
                  </div>

                  <div className="field-container">
                    <OtpInput
                      value={otpText}
                      onChange={onOtpEnter}
                      numInputs={6}
                      containerStyle="otp-field-wrapper"
                      isInputNum={true}
                      inputStyle="otp-field-input"
                    />
                  </div>
                  <div className="resend-link-container">
                    <IonText>
                      <Translate message="otp.resendText" />
                      <a>
                        <Translate message="otp.resendLinkText" />
                      </a>
                    </IonText>
                  </div>
                  <div className="confirm-btn-wrapper">
                    <ButtonConmponent
                      buttonLabel="common.continue"
                      size="block"
                      clickHandler={handleVerifyOtp}
                    />
                  </div>
                </>
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { OtpPage };
