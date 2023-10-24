import { FeedDataBase } from './components/feeddb/feeddb';
import HistoryResults from './components/history/history';
import { Search } from './components/search/Search.1';

export default function Home() {
    return (
        <main className="">
            <div className="search-container">
                <FeedDataBase />
                <Search />
                <ButtonFetch />
            </div>
            <div className="history-results">
                <HistoryResults />
            </div>
        </main>
    );
}
