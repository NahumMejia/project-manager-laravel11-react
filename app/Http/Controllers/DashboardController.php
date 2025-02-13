<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){

        $user = Auth::user();
        $totalPendingTasks = Task::query()
        ->where('status','pending')
        ->count();
        $myPendingTasks = Task::query()
        ->where('status','pending')
        ->where('assigned_user_id',$user->id)
        ->count();


        $user = Auth::user();
        $totalProgressTasks = Task::query()
        ->where('status','in_progress')
        ->count();
        $myProgressTasks = Task::query()
        ->where('status','in_progress')
        ->where('assigned_user_id',$user->id)
        ->count();


        $user = Auth::user();
        $totalCompletedTasks = Task::query()
        ->where('status','completed')
        ->count();
        $myCompletedTasks = Task::query()
        ->where('status','completed')
        ->where('assigned_user_id',$user->id)
        ->count();

        $activeTasks = Task::query()
            ->whereIn('status',['pending','in_progress'])
            ->where('assigned_user_id',$user->id)
            ->limit(10)
            ->get();
        $activeTasks = TaskResource::collection($activeTasks);
        return Inertia::render("Dashboard",
        compact(
            "totalPendingTasks",
            "myPendingTasks", 
            'totalProgressTasks',
            'myProgressTasks',
            'totalCompletedTasks',
            'myCompletedTasks',
            "activeTasks",
        ));
    }
}
