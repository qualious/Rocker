import React, { Dispatch, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Dropdown } from '../../components';
import { vSSN, vEmail, vPhone, vAll } from '../../utils/validators';

import styles from './styles';

import { AppState } from '../../store/reducer';
import { get } from '../../store/country/actions';
import { StateActions } from '../../store/state/interfaces';
import {
  CHANGE_COUNTRY,
  CHANGE_EMAIL,
  CHANGE_PHONE,
  CHANGE_SSN,
  CLEAR_ALL,
} from '../../store/state/constants';
import { CountryActions } from '../../store/country/interfaces';

const Home = () => {
  const { loading, data } = useSelector(({ country }: AppState) => country);
  const { ssn, phone, email, country } = useSelector(
    ({ state }: AppState) => state,
  );
  const stateDispatch = useDispatch<Dispatch<StateActions>>();
  const countryDispatch = useDispatch<Dispatch<CountryActions>>();
  useEffect(() => countryDispatch(get()), []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Form</Text>
              <Input
                label="SSN"
                example="xxxxxx-xxxx"
                value={ssn}
                validator={vSSN}
                onChangeText={(text) =>
                  stateDispatch({ type: CHANGE_SSN, text })
                }
                mask="[000000]-[0000]"
              />
              <Input
                label="Phone Number"
                value={phone}
                validator={vPhone}
                onChangeText={(text) =>
                  stateDispatch({ type: CHANGE_PHONE, text })
                }
                mask="+46 [00]-[000] [00] [00]"
              />
              <Input
                label="Email Address"
                value={email}
                validator={vEmail}
                onChangeText={(text) =>
                  stateDispatch({ type: CHANGE_EMAIL, text })
                }
              />
              <Dropdown
                data={data}
                loading={loading}
                value={country}
                onPress={({ value }) => {
                  console.log(value);
                  stateDispatch({ type: CHANGE_COUNTRY, text: value });
                }}
              />
              <Button
                text="Submit"
                onPress={() =>
                  vAll(ssn, phone, email, country) &&
                  stateDispatch({ type: CLEAR_ALL }) &&
                  console.log('Success')
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
