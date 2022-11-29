<script>
  import UserIcon from './icons/generic/UserIcon.vue';
  import RepositoryIcon from './icons/projects/GitHubSearch/RepositoryIcon.vue';
	import GithubService from '../services/GithubService.js';

	export default {
		props:{ 
			username: String,
			itemsPerPage: Number,
			executeWhenCreated: {
				typeof: Boolean,
				default: false
			},
		},
		components: { UserIcon, RepositoryIcon },
		data() {
			return {
				profile: new Object(),
				repositories: [],
				searchResult: '',
				selectedPage: 1
			};
		},
		computed:{
      totalPagesRepo(){
        return Math.ceil(this.repositories.length/this.itemsPerPage)
      },
      filteredArrayRepo(){
        return this.repositories.slice(this.itemsPerPage * (this.selectedPage-1), this.itemsPerPage * this.selectedPage)
      }
    },
		methods:{
			onPageChanged(pageNumber){
        this.selectedPage = pageNumber
				document.body.scrollTop = 0; // For Safari
				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      },
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
				this.selectedPage = 1
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
		<div class="card" v-for="repo in filteredArrayRepo">
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
		<div class="flex-pagination" v-if="(totalPagesRepo > 1)">
			<button class="pagination-button"
				v-for="(number, index) in totalPagesRepo" 
				v-bind:class="number == selectedPage ? 'pagination-button-selected': true"
				v-bind:id="'Page'+number"
				@click="onPageChanged(number)">
				{{ number }}
			</button>
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
		min-height: 20px;
		max-height: 20px;
		min-width: 20px;
		max-width: 20px;
		margin-right: 0.3rem;
  }

	.flex-pagination{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0.5rem;
	}

	.pagination-button{
		border-radius: 0;
		margin: 0 4px;
	}

	.pagination-button-selected{
		background-color: var(--color-button-background-highlight);
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

	.card, .card-profile, .card-error{
		display: flex;
		flex-direction: column;
		border: 2px solid var(--color-card-border);
		background-color: var(--color-card-background);
		border-radius: 8px;
		overflow: hidden;
	}
	.card-content{
	  padding: 1rem;
		height: 100%;
	}
	.card-footer{
		margin-top: auto;
		padding: 0.4rem 1rem 0.4rem 1rem;
		border-top: 1px solid var(--color-card-border);
		color: var(--color-text-secondary);
	}

	.card-profile{
		padding: 1rem;
		border: 2px solid var(--color-card-border);
		background-color: var(--color-card-background);
		width: 60%;
	}

	.card-error{
		padding: 1rem;
		border: 2px solid var(--color-error);
		background-color: var(--color-card-background);
		width: 80%;
	}

	.title-link{
		display: flex;
		align-items: center;
		font-size: 1.2em;
		color: var(--color-link);
		text-decoration: none;
		font-weight: 600;
		word-break: break-all;
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
			grid-template-columns: repeat(2,minmax(0, 1fr));
		}
	}

	@media (max-width: 700px) {
		.card-list{
			grid-template-columns: minmax(0, 1fr);
		}
		.card-profile{
			width: 100%;
		}
	}
</style>
