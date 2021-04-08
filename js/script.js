// get btn tweet
const tweetBtn = document.querySelector('.btn-tweet');
tweetBtn.addEventListener('click', function() {
	addTweet();
});

function addTweet() {
	const inputTweet = document.querySelector('.tweet-input');
	let containerContent = document.getElementById('container-content');
	const result = inputTweet.value;
	let defaultLike = 1;

	// if the input is empty
	if (result === '') {
		alert('Write something ..');
		return;
	}; 

	let el = `<div class="content-wrap">
					<!-- profil -->
					<div class="content-profil"></div>
					<!-- tweet content -->
					<div class="content-tweet">
						<!-- content name -->
						<div class="content-name">
							<strong>Ward Jobs</strong>
							<span>@wardjobs</span>
							<span>.</span>
							<span class="hour">13h</span>
						</div>
						<!-- text content -->
						<div class="text-content">
							<p id="text-tweet">${result}</p>
						</div>
						<!-- content action -->
						<div class="content-action">
							<div class="like">
								<svg class="love-btn w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

								<span>${defaultLike} Like</span>
							</div>
							<div class="comment">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>

								<span>Comment</span>
							</div>
							<div class="share">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>

								<span>Retweet</span>
							</div>
						</div>
					</div>
				</div>`;
	// containerContent.innerHTML += el;
	containerContent.insertAdjacentHTML('afterbegin', el);
	inputTweet.value = '';
	likeTweet();
}

function likeTweet() {
	const loveBtn = document.querySelector('.love-btn');
	loveBtn.addEventListener('click', function() {
		this.classList.toggle('active');
	});
};