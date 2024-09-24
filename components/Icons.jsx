import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const CircleInfoIcon = (props) => (
  <FontAwesome name="info-circle" size={24} color="white" {... props} />
);

export const UserIcon = (props) => (
  <FontAwesome name="user" size={32} color="white" {... props} />
);

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={32} color="white" {... props} />
);

export const InfoIcon = (props) => (
  <FontAwesome name="info" size={32} color="white" {... props} />
);

export const VaccIcon = (props) => (
  <MaterialIcons name="vaccines" size={32} {... props} />
)

export const HospIcon = (props) => (
  <MaterialIcons name="local-hospital" size={24} {... props} />
)