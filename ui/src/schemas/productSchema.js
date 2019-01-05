import { PropTypes } from 'react-schema'

const { shape, string } = PropTypes

/*

EXAMPLE:

{
  created_at: "2018-12-28T01:25:52.177Z"
  description: "test desc2"
  id: "1"
  name: "test 1"
  price: "1.0"
  updated_at: "2018-12-28T01:25:52.177Z"
}

*/

export default shape({
  created_at: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  price: string.isRequired,
  updated_at: string.isRequired,
})
