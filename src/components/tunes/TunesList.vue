<template>
	<ul class="tunes-list">
		<li>
			<TunesSong v-for="song in songs" :key="song.id" :song="song" />
		</li>
	</ul>
</template>

<script>
import TunesSong from "./TunesSong.vue";
export default {
	components: {
		TunesSong
	},
	data() {
		return {
			songs: []
		};
	},
	mounted() {
		this.$root.$on("new-songs-bro", data => (this.songs = data));
	}
};
</script>

<style lang="scss" scoped>
ul {
	margin-top: 3em;
	padding-left: 0;
	list-style: none;
}
</style>