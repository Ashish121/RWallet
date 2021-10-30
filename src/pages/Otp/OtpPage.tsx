import React, { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IonPage, IonContent, IonText } from "@ionic/react";
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication";
import "firebase/auth";
import OtpInput from "react-otp-input";
import { Translate } from "../../i18n/formatMessages";
import { useNotificationService } from "../../hooks/Notification";
import {
  BackButton,
  ButtonConmponent,
  LoaderComponent,
} from "../../components";
import {
  updateToast,
  requestForRegistration,
  RequestForUpdateDeviceToken,
} from "../../redux/actions";

import "./OtpPage.scss";

const OtpPage: React.FC = () => {
  const isPlatformIOS = isPlatform("ios");
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  // const notification = useNotificationService();
  const [otpText, setOtpText] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [otpReceived, setOtpReceived] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [contact, setContact] = useState("");
  const [loaderMessage, setLoaderMessage] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [backNavigationPage, setBackNavigation] = useState(null);
  const [autoVerified, setAutoVerified] = useState(false);
  const notification = useNotificationService();
  useEffect(() => {
    localStorage.setItem("previousRoute", "/reset");
  }, []);
  useEffect(() => {
    let isMounted = true;
    let userDetails: any;
    const params: any = location.state;
    const backNavigation = params.backNavigation || null;
    if (isMounted) {
      setBackNavigation(backNavigation);
      setContact(params.mobileNo);
      if (localStorage.getItem("loginDetails") !== undefined) {
        userDetails = localStorage.getItem("loginDetails");
      }
      const countryCode: any = userDetails
        ? JSON.parse(userDetails).data.user.country_code
        : params.countryCode;

      setCountryCode(countryCode);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const onOtpEnter = (otp: any) => {
    setOtpText(otp);
    const finalOtp = otpValue.concat(otp);
    setOtpValue(finalOtp);
  };
  function savePushToken(token: any) {
    const user_id = localStorage.getItem("userId");
    dispatch(
      RequestForUpdateDeviceToken({
        user_id,
        pushToken: JSON.parse(token).value,
      })
    );
  }
  function nextRoute(status: any, data: any) {
    setShowLoading(false);
    setLoaderMessage("");
    if (status == true) {
      notification.askPushPermission(savePushToken);
      history.replace("/mpin");
    } else {
      history.replace("/register");
      dispatch(updateToast(data));
    }
  }

  function sendOTP() {
    setShowLoading(true);
    setLoaderMessage("Please Wait...");
    alert("Platform is IOS " + isPlatformIOS);
    // if (!isPlatformIOS) {
    //   console.log("isPlatformIOS", isPlatformIOS);
    //   FirebaseAuthentication.onAuthStateChanged().subscribe((userInfo: any) => {
    //     if (userInfo) {
    //       console.log("UserInfo after auto verify", userInfo);
    //       setAutoVerified(true);
    //     }
    //   });
    // }

    FirebaseAuthentication.verifyPhoneNumber(`+${countryCode}${contact}`, 30000)
      .then((verificationId: any) => {
        alert(verificationId);
        setShowLoading(false);
        setOtpReceived(true);
        setVerificationId(verificationId);
      })
      .catch(function (error: any) {
        // eslint-disable-next-line no-console
        setShowLoading(false);
        const data = {
          showToast: true,
          toastMessage:
            "Couldn't send otp.This usually occurs if you try to send too many OTP within a sort period of time.Please try after some time",
          position: "top",
          duration: "100000",
        };
        dispatch(updateToast(data));
      });
  }

  const handleVerifyOtp = () => {
    setShowLoading(true);
    setLoaderMessage("Verifying...");
    if (
      verificationId == null ||
      verificationId == "" ||
      verificationId == undefined
    ) {
      console.log("User is auto verified");
      alert("Auto Verified by firebase");
      setAutoVerified(false);
      handleOTPverified();
      return;
    }
    alert("-> " + verificationId);
    FirebaseAuthentication.signInWithVerificationId(
      verificationId,
      otpText
    ).then(
      () => {
        handleOTPverified();
      },
      () => {
        setShowLoading(false);
        const data = {
          showToast: true,
          toastMessage: "Invalid OTP.Please check your otp or resend it.",
          position: "top",
          duration: "12000",
        };
        dispatch(updateToast(data));
        setOtpText("");
      }
    );
  };
  function back() {
    const params: any = location.state;
    if (params.routeName) {
      history.replace("/reset");
      return;
    }
    if (params.updateMode || backNavigationPage) {
      history.replace("/tabs");
      return;
    }
    history.replace("/register");
  }

  function handleOTPverified() {
    const params: any = location.state;
    setShowLoading(false);
    setLoaderMessage("");
    localStorage.setItem("countryCode", countryCode);
    if (params.routeName) {
      history.replace("/" + params.routeName, { mobileNo: contact });
      return;
    }
    if (params.updateMode || params.backNavigation) {
      history.replace("/mpin", { data: params });
      return;
    }
    setShowLoading(true);
    setLoaderMessage("Registration in progress...");
    dispatch(
      requestForRegistration(
        {
          name: params.fullName,
          gender: params.gender,
          mobileNo: params.mobileNo,
          password: params.password,
          countryCode,
        },
        nextRoute
      )
    );
  }
  return (
    <>
      <LoaderComponent
        showLoading={showLoading}
        loaderMessage={loaderMessage}
      />

      <IonPage>
        <BackButton clickHandler={back} />
        <IonContent className='otp-content'>
          <div className='otp-container'>
            {!otpReceived && (
              <>
                <div className='page-header'>
                  <IonText>
                    <Translate message='otp.sendOtpHeader' />
                  </IonText>
                </div>
                <div className='innercontainer' style={{ marginTop: "10px" }}>
                  <IonText style={{ color: "#ffffff" }}>
                    <Translate
                      message='otp.sendOtpInfo'
                      value={{ contact, countryCode }}
                    />
                  </IonText>
                </div>
                <div
                  className='confirm-btn-wrapper'
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ButtonConmponent
                    buttonLabel='otp.send'
                    size='block'
                    clickHandler={sendOTP}
                  />
                </div>
              </>
            )}
            {otpReceived && (
              <>
                <div className='page-header'>
                  <IonText>
                    <Translate message='otp.pageHeader' />
                  </IonText>
                </div>
                <div className='page-sub-header'>
                  <div className='innercontainer'>
                    <IonText>
                      <Translate
                        message='otp.pageSubHeader'
                        value={{ contact, countryCode }}
                      />
                    </IonText>
                  </div>
                </div>

                <div className='field-container'>
                  <OtpInput
                    value={otpText}
                    onChange={onOtpEnter}
                    numInputs={6}
                    containerStyle='otp-field-wrapper'
                    isInputNum={true}
                    inputStyle='otp-field-input'
                  />
                </div>
                <div className='resend-link-container'>
                  <IonText>
                    <Translate message='otp.resendText' />
                    <a onClick={sendOTP}>
                      <Translate message='otp.resendLinkText' />
                    </a>
                  </IonText>
                </div>
                <div className='confirm-btn-wrapper'>
                  <ButtonConmponent
                    buttonLabel='common.continue'
                    size='block'
                    clickHandler={handleVerifyOtp}
                  />
                </div>
              </>
            )}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { OtpPage };
