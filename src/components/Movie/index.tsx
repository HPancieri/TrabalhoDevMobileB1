import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Movie (props: any) {
	return (
		<View style={styles.MovieContainer}>
			<Image
				source={{ uri: props.apiURL + props.movie.attributes.poster.data.attributes.url }}
				style={styles.Image}
			/>

			<View style={styles.TextContainer}>
				<Text style={styles.Title}>{props.movie.attributes.titulo}</Text>
				<Text style={styles.Description}>{props.movie.attributes.sinopse}</Text>

				<TouchableOpacity style={styles.BuyBtn} onPress={() => {}}>
					<Text>Comprar Ingresso</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}