import { FaCalendarAlt } from "react-icons/fa";
import events from "@/data/events.json";

export default function EventsPage() {
  const today = new Date();
  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(`${event.date}T${event.time}:`);
    return eventDate >= today;
  });

  const googleFormUrl = "https://forms.gle/YOUR_GOOGLE_FORM_ID";

  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <FaCalendarAlt className="text-green-700 text-5xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold text-green-800 mb-4">Upcoming Events</h1>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Stay connected with the Newark Central Masjid community — from Friday sermons and youth
          programs to special Ramadan activities and outreach events.
        </p>

        {upcomingEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 text-left hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    📅{" "}
                    <span className="font-medium">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>{" "}
                    — {event.time}
                  </p>
                  <p className="text-gray-700 mb-3">{event.description}</p>
                  <p className="text-gray-500 italic">{event.location}</p>
                </div>

                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
                >
                  Register / Learn More
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 text-left hover:shadow-lg hover:-translate-y-1 transition-all">
            <p className="text-gray-600 text-lg mb-2">📅 No upcoming events at the moment.</p>
            <p className="text-gray-500 italic">Check back soon for updates.</p>
          </div>
        )}
      </div>
    </section>
  );
}
