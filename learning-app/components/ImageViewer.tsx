import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
    imgSource: ImageSource;
    selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
    return <Image source={selectedImage || imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});