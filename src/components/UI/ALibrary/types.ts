import { FlexAlignType } from 'react-native';

export interface AStyle {
  flex?: number
  display?: 'flex' | 'none'
  height?: number
  width?: number | '100%' | '90%' | '80%' | '70%' | '60%' | '50%'
  margin?: number
  padding?: number
  top?: number
  left?: number
  right?: number
  bottom?: number
  position?: 'absolute' | 'relative'
  borderRadius?: number
  borderTopWidth?: number
  borderBottomWidth?: number
  borderColor?: string
  borderWidth?: number
  paddingTop?: number
  paddingRight?: number
  paddingLeft?: number
  paddingBottom?: number
  paddingHorizontal?: number
  paddingVertical?: number
  marginTop?: number
  marginRight?: number
  marginLeft?: number
  marginBottom?: number
  marginHorizontal?: number
  marginVertical?: number
  backgroundColor?: string
  alignItems?: FlexAlignType
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  flexDirection?: 'row' | 'column'
}
