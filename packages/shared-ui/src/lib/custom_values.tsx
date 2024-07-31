interface CustomValuesType {
  container_home: number;
  mobile_padding_x: number;
  container_login: number;
  integration_container: number;
  colors: {
    g_0: string;
    g_1: string;
    g_2: string;
    g_3: string;
    green_0: string;
    green_1: string;
    blue_1: string;
    blue_2: string;
    blue_3: string;
    pink_1: string;
    contrastText: string;
  };
}

const custom_values: CustomValuesType = {
  container_home: 1060,
  mobile_padding_x: 20,
  container_login: 840,
  integration_container: 620,

  colors: {
    g_0: '#E7EBFF',
    g_1: '#F7F8FD',
    g_2: '#56596B',
    g_3: '#B5BBCD',

    green_0: '#E9FEF1',
    green_1: '#2FD79B',

    blue_1: '#2660F5',
    blue_2: 'rgba(38, 97, 245, 0.50)',
    blue_3: 'rgba(38, 97, 245, 0.20)',

    pink_1: '#F52671',

    contrastText: '#101117',
  },
};

export default custom_values;
