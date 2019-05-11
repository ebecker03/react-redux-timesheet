jest.mock('axios', () => ({
  get: jest.fn(),
  put: jest.fn(),
  post: jest.fn()
}));

describe('<EmployeeDetail />', () => {
  it('should instantiate the Employee Detail Component', () => {
    const component = mount(<EmployeeDetail />);
    component.setState({ employee: { _id: 1 } });

    expect(component).toIncludeText('Employee Detail');
  });
});