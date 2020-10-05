const Adapter = require("enzyme-adapter-react-16")
const { advanceTo } = require("jest-date-mock")

require("enzyme").configure({ adapter: new Adapter() })

// Set fixed new Date()
advanceTo(new Date(2021, 0, 1))
