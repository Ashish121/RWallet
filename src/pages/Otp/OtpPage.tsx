import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
import 'firebase/auth';
import OtpInput from 'react-otp-input';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, LoaderComponent } from '../../components';

import './OtpPage.scss';

const OtpPage: React.FC = () => {
  const [otpText, setOtpText] = useState('');
  // const history = useHistory();
  const [verificationId, setVerificationId] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [otpReceived, setOtpReceived] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  // history.push("/mpin");

  const onOtpEnter = (otp: any) => {
    setOtpText(otp);
    const finalOtp = otpValue.concat(otp);
    setOtpValue(finalOtp);
  };

  function sendOTP() {
    console.log('Sending OTP now');
    setShowLoading(true);
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
      });
  }

  const handleVerifyOtp = () => {
    console.log('otp: ', otpText);
    console.log('verificationId: ', verificationId);
    setShowLoading(true);
    // const signInCredential = firebase.auth.PhoneAuthProvider.credential(
    //   verificationId,
    //   otpValue
    // );
    FirebaseAuthentication.signInWithVerificationId(
      verificationId,
      otpText
    ).then(
      (response) => {
        console.log('opt verification status: ', response);
        setShowLoading(false);
      },
      (error) => {
        setShowLoading(false);
        console.log('Error: ', error);
      }
    );
  };
  return (
    <>
      <LoaderComponent showLoading={showLoading} loaderMessage="Wait..." />
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="otp-container">
              <div className="page-header">
                <IonText>
                  <Translate message="otp.pageHeader" />
                </IonText>
              </div>
              {!otpReceived && (
                <>
                  <div className="innercontainer">
                    <IonText>
                      <Translate
                        message="otp.sendOtpInfo"
                        value={{ contact: '8892050268' }}
                      />
                    </IonText>
                  </div>
                  <div className="confirm-btn-wrapper">
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
                  <div className="page-sub-header">
                    <div className="innercontainer">
                      <IonText>
                        <Translate
                          message="otp.pageSubHeader"
                          value={{ contact: '8892050268' }}
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
                      <a onClick={sendOTP}>
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
                    {/* <button
                  disabled
                  id="sign-in-button"
                  style={{ display: "none" }}
                >
                  Sign-in
                </button> */}
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
