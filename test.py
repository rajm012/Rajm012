import requests
import json

def save_repos_to_json(username, filename="github_repos.json"):
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)
    
    if response.status_code == 200:
        repos = response.json()
        
        # Prepare data
        repo_data = []
        for repo in repos:
            repo_info = {
                'name': repo['name'],
                'full_name': repo['full_name'],
                'description': repo['description'],
                'url': repo['html_url'],
                'ssh_url': repo['ssh_url'],
                'clone_url': repo['clone_url'],
                'stars': repo['stargazers_count'],
                'forks': repo['forks_count'],
                'language': repo['language'],
                'created_at': repo['created_at'],
                'updated_at': repo['updated_at'],
                'size': repo['size'],
                'private': repo['private'],
                'has_issues': repo['has_issues'],
                'has_wiki': repo['has_wiki'],
                'license': repo['license']['key'] if repo['license'] else None
            }
            repo_data.append(repo_info)
        
        # Save to file
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(repo_data, f, indent=2, ensure_ascii=False)
        
        print(f"Saved {len(repo_data)} repositories to {filename}")
        return repo_data
    else:
        print(f"Error: {response.status_code}")
        return None

# Usage
save_repos_to_json("rajm012")

