import React, { useState, useEffect } from 'react';
import { HeaderComponent } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestForTransactionDetails } from '../../redux/actions/';

import {
  IonCard,
  IonCardContent,
  IonPage,
  IonContent,
  IonApp,
  IonText,
  IonImg,
} from '@ionic/react';
import './TransactionHistory.scss';
import { Translate } from '../../i18n/formatMessages';
import LoaderComponent from '../../components/Spinner/Spinner';

const TransactionHistory: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');
  const user_id = localStorage.getItem('userId');

  const transactionFields = useSelector(
    (state: any) => state.history.historyDetails
  );

  useEffect(() => {
    setIsLoading(true);
    setLoaderMessage('loading history...');
    dispatch(
      requestForTransactionDetails(
        {
          user_id,
        },
        nextRoute
      )
    );
  }, []);

  function nextRoute(status: any) {
    setIsLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/history');
    }
  }

  function historyUpdatedDate(item: Date) {
    var d = new Date(item);
    return d.toDateString();
  }
  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="transaction-wrapper">
              <IonText className="transaction-text-area">
                <Translate message="TransactionHistory.text" />
              </IonText>
              <IonCard>
                <IonCardContent style={{ width: '100%' }}>
                  {transactionFields.map((item: any) => {
                    return (
                      <div
                        className="card-body-wrapper"
                        style={{ borderLeftColor: 'red', width: '100%' }}
                      >
                        <div className="card-inner-header">
                          <IonText className="transaction-type">
                            Payment To
                          </IonText>

                          <div
                            className="common-ion-text"
                            style={{
                              borderRadius: '0px 7px 7px 0px',
                              backgroundColor: '#ffffff',
                              color: '#222428',
                            }}
                          >
                            <IonImg
                              style={{
                                width: '15px',
                                marginRight: '2px',
                              }}
                              src={require('../../assets/Icons/RupayBlack.svg')}
                            />
                            <IonText
                              className="transaction-type"
                              style={{ color: '#222428' }}
                            >
                              {item.amount}
                            </IonText>
                          </div>
                        </div>
                        <div className="card-inner-body">
                          <IonText className="transaction-type">
                            {item.remarks}
                          </IonText>
                          <IonText
                            className="transaction-type"
                            style={{ fontSize: '8px' }}
                          >
                            {historyUpdatedDate(item.updated_at)}
                          </IonText>
                        </div>
                      </div>
                    );
                  })}
                </IonCardContent>
              </IonCard>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { TransactionHistory };
