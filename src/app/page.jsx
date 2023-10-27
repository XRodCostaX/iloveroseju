import { FeedDataBase } from './components/feeddb/feeddb';
import HistoryResults from './components/history/history';
import { Search } from './components/search/search';

export default function Home() {
    console.log('EU SOU SERVIDOR');
    return (
        <main className="bg-stone-300">
            <div className="search-container flex justify-evenly">
                <FeedDataBase />
                <Search />
            </div>
            <div className="history-results">
                <HistoryResults />
            </div>
        </main>
    );
}
