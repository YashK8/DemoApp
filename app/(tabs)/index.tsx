import { Image, StyleSheet, View, Text, Pressable, ImageBackground, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {

  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme);

  return (
    <View style={styles.container}>
      <View style={styles.eleConteiner}>
        <Pressable
          style={styles.eleBtn}
          onPress={() => { alert("Electrical") }}
        >
          <Text style={styles.eleTxt}>Electrical</Text>
        </Pressable>
        <Pressable
          onPress={() => { alert("Temperature & Humidity") }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#009900', '#32CD32']}
            style={styles.eleBtn}
          >
            <Text style={{ color: '#fff' }}>Temperature & Humidity</Text>
          </LinearGradient>
        </Pressable>


        <View style={styles.weatherContainer}>
          <ImageBackground
            style={styles.bgImage}
            source={
              colorScheme === 'light' ?
              require('@/assets/images/monitoringImg.png'):
              require('@/assets/images/monitoringImgDark.png')
            }>
            <View style={styles.dtContainer}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateTxt, styles.shadowTxt]}>
                  20 August 2024
                </Text>
              </View>
              <View style={styles.timeContainer}>
                <Text style={[styles.timeTxt, styles.shadowTxt]}>
                  16:30
                </Text>
              </View>
            </View>
            <View style={styles.tempretureContainer} >
              <Text style={styles.tempretureTxt}>
                29°
              </Text>
            </View>
            <View style={styles.clContainer}>
              <Image
                style={styles.mapImg}
                source={colorScheme === 'light' ?
                  require('@/assets/images/map.png'):
                  require('@/assets/images/mapDark.png')}
              ></Image>
              <Text style={[styles.clTxt, styles.shadowTxt]}>
                Current Location
              </Text>
              <Image
                style={styles.downImg}
                source={colorScheme === 'light' ?
                  require('@/assets/images/opt.png'):
                  require('@/assets/images/optDark.png')}
              ></Image>
            </View>
            <View style={styles.wetherTypeContainer}>
              <Text
                style={[styles.wetherTypeTxt, styles.shadowTxt]}>
                Cloudy
              </Text>
            </View>
            <View
              style={styles.humidityContainer}>
              <Image
                style={styles.humidityImg}
                source={colorScheme === 'light' ?
                  require('@/assets/images/hum.png'):
                  require('@/assets/images/humDark.png')}
              ></Image>
              <Text style={[styles.humidityTxt, styles.shadowTxt]}>
                Hum   |
              </Text>
              <Text style={[styles.humidityPrecTxt, styles.shadowTxt]}>
                54 %
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const getStyles = (colorScheme: any) => {
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme === 'light' ? "#2AC42A":"#000000",
  },
  eleConteiner: {
    flex: 1,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  eleBtn: {
    backgroundColor: colorScheme === 'light' ? '#fff':'#000',
    width: 250,
    marginBottom: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#2AC42A',
    borderRadius: 30,
  },
  eleTxt:{
    color: colorScheme === 'light' ? "#000":"#2AC42A"
  },
  weatherContainer: {
    marginTop: 70,
    height: 300,
    width: 325,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  dtContainer: {
    flexDirection: 'row',
    paddingVertical: 20
  },
  dateContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  shadowTxt: {
    textShadowColor: colorScheme === 'light' ? 'rgba(0, 0, 0, 0.1)':'rgba(255, 255, 255, 0.25)',
    textShadowOffset: { width: -2, height: 4 },
    textShadowRadius: 2,
  },
  dateTxt: {
    fontSize: 18,
    paddingLeft: 2,
    color: colorScheme === 'light' ? "#000" : "#fff"
  },
  timeContainer: {
    flex: 0.5, alignItems: 'flex-end', paddingRight: 20
  },
  timeTxt: {
    fontSize: 18, 
    paddingLeft: 2,
    color: colorScheme === 'light' ? "#000" : "#fff"
  },
  tempretureContainer: {
    flex: 1,
    paddingLeft: 40,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempretureTxt: {
    fontSize: 100,
    color: colorScheme === 'light' ? "#000" : "#fff"
  },
  clContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapImg: {
    marginHorizontal: 10
  },
  clTxt: {
    fontSize: 18,
    paddingLeft: 2,
    color: colorScheme === 'light' ? "#000" : "#fff"
  },
  downImg: {
    marginHorizontal: 5
  },
  wetherTypeContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wetherTypeTxt: {
    fontSize: 24,
    fontWeight: '700',
    paddingLeft: 2,
    color: colorScheme === 'light' ? "#000" : "#fff"
  },
  humidityContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  humidityImg: {
    marginRight: 10
  },
  humidityTxt: {
    fontSize: 18,
    marginRight: 10,
    color: colorScheme === 'light' ? "#000" : "#fff"
  },
  humidityPrecTxt: {
    fontSize: 18,
    marginLeft: 5,
    color: colorScheme === 'light' ? "#000" : "#fff"
  },
});
}
