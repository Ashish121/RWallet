import React, { useState } from "react";
import { ButtonConmponent, HeaderComponent } from "../../components";
import {
  IonCard,
  IonCardContent,
  IonPage,
  IonContent,
  IonApp,
  IonText,
  IonFooter,
  IonIcon,
  IonFabButton,
} from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";
import "./CartPage.scss";
import { Translate } from "../../i18n/formatMessages";
import { useHistory } from "react-router-dom";
const CartPage: React.FC = () => {
  const history = useHistory();
  const [count, setCount] = useState(1);
  function increaseCount() {
    console.log("Hello increasing count");

    let currentCount = count + 1;
    if (count >= 1) {
      setCount(currentCount);
    }
    return;
  }
  function decreaseCount() {
    console.log("Hello decreasing count");
    let currentCount = count - 1;
    if (count > 1) {
      setCount(currentCount);
    }
    return;
  }
  function goBack() {
    history.replace("/tabs/shopping/itemdetails");
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable={"common.header"}
            showMenu={false}
            showNotification={false}
            showCart={true}
            showBackButton={true}
            handler={goBack}
          />

          <IonContent>
            <div className="cart-page-wrapper">
              <div className="page-header">
                <IonText>
                  <Translate message="cart.pageLabel" />
                </IonText>
              </div>
              <IonCard>
                <IonCardContent>
                  <div className="cart-inner-body" style={{ display: "flex" }}>
                    <div className="item-image-wrapper">Image1</div>
                    <div className="details-wrapper">
                      <div className="item-name">
                        <IonText>Redmi Note 9</IonText>
                      </div>
                      <div className="item-varient">
                        <IonText>4GB Ram + 64GB Storage</IonText>
                      </div>
                      <div className="item-price">
                        <IonText>RS 8999.00</IonText>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <div className="plus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={increaseCount}
                        >
                          <IonIcon ios={addOutline} md={addOutline} />
                        </IonFabButton>
                      </div>
                      <div className="count" style={{ marginLeft: "13px" }}>
                        {count}
                      </div>
                      <div className="minus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={decreaseCount}
                        >
                          <IonIcon ios={removeOutline} md={removeOutline} />
                        </IonFabButton>
                      </div>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <div className="cart-inner-body" style={{ display: "flex" }}>
                    <div className="item-image-wrapper">Image1</div>
                    <div className="details-wrapper">
                      <div className="item-name">
                        <IonText>Redmi Note 9</IonText>
                      </div>
                      <div className="item-varient">
                        <IonText>4GB Ram + 64GB Storage</IonText>
                      </div>
                      <div className="item-price">
                        <IonText>RS 8999.00</IonText>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <div className="plus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={increaseCount}
                        >
                          <IonIcon ios={addOutline} md={addOutline} />
                        </IonFabButton>
                      </div>
                      <div className="count" style={{ marginLeft: "13px" }}>
                        {count}
                      </div>
                      <div className="minus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={decreaseCount}
                        >
                          <IonIcon ios={removeOutline} md={removeOutline} />
                        </IonFabButton>
                      </div>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <div className="cart-inner-body" style={{ display: "flex" }}>
                    <div className="item-image-wrapper">Image1</div>
                    <div className="details-wrapper">
                      <div className="item-name">
                        <IonText>Redmi Note 9</IonText>
                      </div>
                      <div className="item-varient">
                        <IonText>4GB Ram + 64GB Storage</IonText>
                      </div>
                      <div className="item-price">
                        <IonText>RS 8999.00</IonText>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <div className="plus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={increaseCount}
                        >
                          <IonIcon ios={addOutline} md={addOutline} />
                        </IonFabButton>
                      </div>
                      <div className="count" style={{ marginLeft: "13px" }}>
                        {count}
                      </div>
                      <div className="minus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={decreaseCount}
                        >
                          <IonIcon ios={removeOutline} md={removeOutline} />
                        </IonFabButton>
                      </div>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <div className="cart-inner-body" style={{ display: "flex" }}>
                    <div className="item-image-wrapper">Image1</div>
                    <div className="details-wrapper">
                      <div className="item-name">
                        <IonText>Redmi Note 9</IonText>
                      </div>
                      <div className="item-varient">
                        <IonText>4GB Ram + 64GB Storage</IonText>
                      </div>
                      <div className="item-price">
                        <IonText>RS 8999.00</IonText>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <div className="plus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={increaseCount}
                        >
                          <IonIcon ios={addOutline} md={addOutline} />
                        </IonFabButton>
                      </div>
                      <div className="count" style={{ marginLeft: "13px" }}>
                        {count}
                      </div>
                      <div className="minus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={decreaseCount}
                        >
                          <IonIcon ios={removeOutline} md={removeOutline} />
                        </IonFabButton>
                      </div>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <div className="cart-inner-body" style={{ display: "flex" }}>
                    <div className="item-image-wrapper">Image1</div>
                    <div className="details-wrapper">
                      <div className="item-name">
                        <IonText>Redmi Note 9</IonText>
                      </div>
                      <div className="item-varient">
                        <IonText>4GB Ram + 64GB Storage</IonText>
                      </div>
                      <div className="item-price">
                        <IonText>RS 8999.00</IonText>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <div className="plus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={increaseCount}
                        >
                          <IonIcon ios={addOutline} md={addOutline} />
                        </IonFabButton>
                      </div>
                      <div className="count" style={{ marginLeft: "13px" }}>
                        {count}
                      </div>
                      <div className="minus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={decreaseCount}
                        >
                          <IonIcon ios={removeOutline} md={removeOutline} />
                        </IonFabButton>
                      </div>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <div className="cart-inner-body" style={{ display: "flex" }}>
                    <div className="item-image-wrapper">Image1</div>
                    <div className="details-wrapper">
                      <div className="item-name">
                        <IonText>Redmi Note 9</IonText>
                      </div>
                      <div className="item-varient">
                        <IonText>4GB Ram + 64GB Storage</IonText>
                      </div>
                      <div className="item-price">
                        <IonText>RS 8999.00</IonText>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <div className="plus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={increaseCount}
                        >
                          <IonIcon ios={addOutline} md={addOutline} />
                        </IonFabButton>
                      </div>
                      <div className="count" style={{ marginLeft: "13px" }}>
                        {count}
                      </div>
                      <div className="minus-btn">
                        <IonFabButton
                          className="fab-btn"
                          size="small"
                          onClick={decreaseCount}
                        >
                          <IonIcon ios={removeOutline} md={removeOutline} />
                        </IonFabButton>
                      </div>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
          </IonContent>
          <IonFooter style={{ height: "50px" }}>
            <div className="footer-wrapper">
              <div className="price-section">
                <IonText className="price-label">
                  <Translate message="cart.total" />
                </IonText>
                <IonText className="price-text">Rs 129445.00</IonText>
              </div>
              <div className="checkout-btn-wrapper">
                <ButtonConmponent buttonLabel="cart.checkout" />
              </div>
            </div>
          </IonFooter>
        </IonPage>
      </IonApp>
    </>
  );
};

export { CartPage };
