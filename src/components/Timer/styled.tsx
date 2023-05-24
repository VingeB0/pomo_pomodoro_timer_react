import styled from '@emotion/styled'
import {Box} from "../../ui-components/Box";

export const StyledModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 450px;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.039), 0 5.5px 16px rgba(0, 0, 0, 0.19);
  border-radius: 1.5rem;
`
