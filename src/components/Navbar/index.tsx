import { useNavigate } from 'react-router-dom';
import { MapPin } from '@phosphor-icons/react';

import Logo from '../../assets/Logo.svg'
import theme from "../../theme";

import { Cart } from "../Cart";

import {
  LocationText,
  ImageContainer,
  NavbarContainer,
  LocationContainer,
  LocationCartContainer,
} from "./styles";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <ImageContainer src={Logo} onClick={() => navigate('/')} />

      <LocationCartContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" color={theme.colors.product.purple} />
          <LocationText>São Paulo, SP</LocationText>
        </LocationContainer>

        <Cart />
      </LocationCartContainer>
    </NavbarContainer >
  )
}