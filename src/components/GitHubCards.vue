<script>
  import UserIcon from './icons/UserIcon.vue';
  import RepositoryIcon from './icons/RepositoryIcon.vue';
	import GithubService from '../services/GithubService.js';

	export default {
		props:{ 
			username: String,
			executeWhenCreated: {
				typeof: Boolean,
				default: false
			},
		},
		components: { UserIcon,RepositoryIcon },
		data() {
			return {
				profile: new Object(),
				repositories: [],
				searchResult: '',
			};
		},
		methods:{
			async RunSearch(){
				const service = new GithubService(this.username)
				const responseUser = await service.getUser()
				if (responseUser.message){
					this.searchResult = 'Error: '+responseUser.message
					return
				}

				const responseUserRepo = await service.getUserRepositories()

				this.profile = responseUser
				this.repositories = service.sortRepositoriesDate(responseUserRepo)
				this.searchResult = 'Success'
			}
		},
		watch: {
			"username": function(val, oldVal) {
				this.RunSearch()
			}
		},
		async created(){
			if (this.executeWhenCreated){
				this.RunSearch()
			}
		}
	}

</script>

<template>
	<section v-if="searchResult == 'Success'">
		<div class="flex-center">
			<div class="card-profile">
				<div class="profile-wrapper">
					<img class="profile-avatar" v-bind:src="profile.avatar_url"/>
					<div class="card-content">
						<a class="title-link" v-bind:href="profile.html_url" target="_blank">
							<UserIcon />{{ profile.name }}</a>
						<p>{{ profile.bio }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="card-list">
		<div class="card" v-for="repo in repositories">
			<div class="card-content">
					<a class="title-link" v-bind:href="repo.html_url" target="_blank">
						<RepositoryIcon />{{ repo.name }}</a>
					<p>{{ repo.description }}</p>
			</div>
			<div class="card-footer">
			<p>Last updated on {{ repo.updated_at }}</p>
			</div>
		</div>
		</div>
	</section>
	<section v-if="searchResult != 'Success' && searchResult != ''">
		<div class="flex-center">
			<div class="card-error">
				<p>{{ searchResult }}</p>
			</div>
		</div>
	</section>
</template>
  
<style scoped>
  svg{
	height: 20px;
	width: 20px;
	margin-right: 0.3rem;
  }

	.flex-center{
		display: flex;
		justify-content: center;
	}
	.card-list{
		display: grid;
		grid-template-columns: repeat(3,minmax(0, 1fr));
		column-gap: 1rem;
		row-gap: 1rem;
		width: 100%;
		margin-top: 1rem;
	}
	.profile-wrapper{
		display: flex;
		align-items: center;
	}

	.card{
		display: flex;
		flex-direction: column;
		border: 2px solid var(--color-card-border);
		background-color: var(--color-card-background);
	border-radius: 8px;
	}
	.card-content{
	  padding: 1rem;
	}
	.card-footer{
		margin-top: auto;
		padding: 0.4rem 1rem 0.4rem 1rem;
		border-top: 1px solid var(--color-card-border);
		color: var(--color-text-secondary);
	}

	.card-profile{
		display: flex;
		flex-direction: column;
		padding: 1rem;
		border: 2px solid var(--color-card-border);
		background-color: var(--color-card-background);
		width: 50%;
		border-radius: 8px;
	}

	.card-error{
		display: flex;
		flex-direction: column;
		padding: 1rem;
		border: 2px solid var(--color-error);
		background-color: var(--color-card-background);
		width: 50%;
		border-radius: 8px;
	}

	.title-link{
	display: flex;
	align-items: center;
	font-size: 1.2em;
	color: var(--color-link);
	text-decoration: none;
	font-weight: 600;
	}
	.title-link:hover{
	color:  var(--color-link-hover);
	transition:  0.4s;
	}

	.card-content > p{
		margin-top: 0.2rem;
	}

	.card-footer > p {
	  font-size: 0.9em;
	}

	.profile-avatar{
		border-radius: 50%;
		max-height: 5rem;
		margin-right: 0.5rem;
	}

	@media (max-width: 1000px) {
		.card-list{
			grid-template-columns: minmax(0, 1fr);
		}
		.card-profile{
			width: 100%;
		}
	}
</style>
