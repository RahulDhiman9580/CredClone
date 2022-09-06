import { Platform } from "react-native";

export default {
    BOLD: 'ProximaNovaA-Bold',
    REGULAR: 'ProximaNova-Regular',
    SEMIBOLD: 'ProximaNovaA-Semibold',
    THIN: 'ProximaNovaA-Thin',
    EXTRA_BOLD: 'ProximaNovaA-Extrabld',
    LIGHT: 'ProximaNovaA-Light',
    SIngPainter: Platform.OS==='ios'?'SignPainter': 'SignPainterHouseScript'
}  